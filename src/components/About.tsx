import { profile } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-4 px-4 py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-2xl min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 md:p-8">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-neutral-900"
        >
          关于我
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
          {profile.about}
        </p>
        {profile.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Interest tags">
            {profile.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-xl bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800 ring-1 ring-sky-100"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
