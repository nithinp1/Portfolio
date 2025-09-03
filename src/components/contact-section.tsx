import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";

export function ContactSection({ id }: { id: string }) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 scroll-mt-16">
      <SectionHeading
        title="Get in Touch"
        description="Have a project in mind or just want to say hello? I'd love to hear from you."
      />
      <div className="mt-12 max-w-xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
