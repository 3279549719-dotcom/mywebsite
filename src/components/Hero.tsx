import { profile } from "../data/profile";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-screen min-w-0 flex-col items-center justify-center px-4 py-16">
      <img
        src={profile.avatar}
        alt={`${profile.name} (${profile.nameEn})`}
        className="h-32 w-32 rounded-2xl object-cover shadow-md ring-1 ring-neutral-200 md:h-40 md:w-40"
      />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-2 max-w-md break-words text-center text-base text-neutral-600 md:text-lg">
        {profile.title}
      </p>
      <button
        type="button"
        onClick={scrollToAbout}
        className="mt-10 rounded-xl bg-sky-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        aria-label="Scroll to About section"
      >
        关于我
      </button>
    </section>
  );
}
