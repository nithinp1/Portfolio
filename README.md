# Professional Portfolio

This is a modern, dynamic, and responsive portfolio website built with Next.js and designed to be easily managed. It automatically showcases your pinned GitHub repositories, allows for a detailed "About Me" section, and includes a functional contact form.

## Core Features

- **Dynamic Project Display**: Automatically fetches and displays your pinned repositories from GitHub, ensuring your portfolio is always up-to-date with your best work.
- **Dynamic Content**: The "About Me" and "Resume" sections are designed to be easily updated. The content is fetched from `src/lib/data.ts`.
- **Contact Form**: A fully functional contact form allows visitors to get in touch with you directly.
- **Responsive Design**: The entire layout is built with Tailwind CSS and ShadCN UI, ensuring a seamless experience across all devices.
- **Modern Tech Stack**: Built with Next.js App Router, React Server Components, and TypeScript for a fast, maintainable, and type-safe application.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **AI (optional)**: [Genkit](https://firebase.google.com/docs/genkit) (scaffolding in place)

### Updating Content

-   **About Me**: Modify the `mockAboutData` object in `src/lib/data.ts` to update the text, skills, and project highlights.
-   **Projects**: The projects are sourced from your pinned GitHub repositories. Simply pin or un-pin repositories on your GitHub profile (`https://github.com/nithinp1` is currently used) to update the projects section.
-   **Resume**: The resume link is currently hardcoded in `src/lib/data.ts` in the `getResumeUrl` function. Update the URL there to point to your latest resume.

### Styling

-   **Colors**: The color palette can be customized by changing the HSL values in `src/app/globals.css`.
-   **Fonts**: The primary font is "Inter" from Google Fonts, which is configured in `src/app/layout.tsx` and `tailwind.config.ts`.
-   **Components**: Components are built using ShadCN UI. You can find them in `src/components/ui` and modify them as needed.
