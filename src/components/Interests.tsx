import { useState } from "react";
import { profile } from "../data/profile";

export default function Interests() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="interests"
      className="scroll-mt-4 px-4 py-16 md:py-20"
      aria-labelledby="interests-heading"
    >
      <div className="mx-auto max-w-5xl min-w-0">
        <h2
          id="interests-heading"
          className="text-2xl font-semibold tracking-tight text-neutral-900"
        >
          兴趣爱好
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {profile.interests.map((interest) => {
            const expanded = expandedId === interest.id;
            return (
              <article
                key={interest.id}
                className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(interest.id)}
                  className="w-full text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset"
                  aria-expanded={expanded}
                  aria-controls={`interest-detail-${interest.id}`}
                >
                  <img
                    src={interest.image}
                    alt={interest.name}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {interest.name}
                    </h3>
                    <p className="mt-2 break-words text-sm leading-relaxed text-neutral-600">
                      {interest.description}
                    </p>
                  </div>
                </button>
                {expanded && (
                  <div
                    id={`interest-detail-${interest.id}`}
                    className="border-t border-neutral-100 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-neutral-700"
                  >
                    {interest.detail}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
