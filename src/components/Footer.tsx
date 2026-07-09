import { profile } from "../data/profile";

const LAST_UPDATED = "2026-07-09";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-center text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Copyright &copy; 2026 {profile.name}</p>
        <p>Last updated: {LAST_UPDATED}</p>
      </div>
    </footer>
  );
}
