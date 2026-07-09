import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-4 px-4 py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 md:p-8">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-neutral-900"
        >
          联系方式
        </h2>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={profile.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Instagram
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 ring-1 ring-neutral-200 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            {profile.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
