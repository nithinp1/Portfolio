import { get, set } from '@vercel/edge-config';
import { NextResponse } from 'next/server';

/**
 * This is a Serverless Function that syncs pinned GitHub repos to Vercel Edge Config.
 * It is designed to be triggered by a Vercel Cron Job.
 */
export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Required for GraphQL API

  if (!GITHUB_USERNAME) {
    return NextResponse.json({ error: 'GITHUB_USERNAME environment variable is not set.' }, { status: 500 });
  }
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GITHUB_TOKEN environment variable is required for this operation.' }, { status: 500 });
  }

  // GraphQL query to fetch pinned repositories
  const graphqlQuery = {
    query: `
      query PinnedRepos($username: String!) {
        user(login: $username) {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                }
                owner {
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      username: GITHUB_USERNAME,
    },
  };

  try {
    console.log(`Fetching pinned repos for ${GITHUB_USERNAME}...`);
    
    // 1. FETCH DATA FROM GITHUB GRAPHQL API
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify(graphqlQuery),
    });

    if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`Failed to fetch from GitHub GraphQL API: ${res.statusText} - ${errorBody}`);
    }

    const jsonResponse = await res.json();
    const pinnedRepos = jsonResponse.data?.user?.pinnedItems?.nodes || [];
    console.log(`Found ${pinnedRepos.length} pinned repos.`);

    // 2. TRANSFORM THE DATA
    // We only want to store the data we need, not the entire API response.
    const projects = pinnedRepos
      .filter(repo => repo.description) // Ensure the repo has a description
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        stars: repo.stargazers.totalCount,
        language: repo.primaryLanguage?.name || 'N/A', // Handle case where language is not set
        imageUrl: repo.owner.avatarUrl,
      }));

    console.log(`Formatted ${projects.length} projects to be stored.`);

    // 3. UPDATE VERCEL EDGE CONFIG
    await set('github_projects', projects);

    console.log('Successfully updated Edge Config with new pinned projects.');

    return NextResponse.json({
      message: `Successfully synced ${projects.length} pinned projects.`,
      projects,
    });

  } catch (error) {
    console.error('Error syncing GitHub projects:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

