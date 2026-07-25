import GroupchatCard from "./GroupchatCard";

const quickCards = [
  {
    title: "Text or call to start",
    body: "Talk to Nelo for 5 minutes and give it their number. That's the whole setup.",
    icon: (
      <path
        d="M8 10.5h8M8 14h5M12 3C7 3 3 6.6 3 11c0 2.2 1 4.2 2.7 5.6L5 21l4.2-1.6c.9.3 1.8.4 2.8.4 5 0 9-3.6 9-8s-4-8-9-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "A real conversation, their way",
    body: "Nelo talks and listens like a person would, patient, warm, never rushed.",
    icon: (
      <path
        d="M12 3v2m0 14a2 2 0 002-2h-4a2 2 0 002 2zm7-5H5c1.4-1.3 2-3 2-5a5 5 0 0110 0c0 2 .6 3.7 2 5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Your family, always in the loop",
    body: "Talk to Nelo anytime, same as they can, or get a report whenever you'd like.",
    icon: (
      <path
        d="M8.5 11a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM15.5 11a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM3.5 18c.5-2.5 2.5-4 5-4s4.5 1.5 5 4M12.5 14c2 .2 3.6 1.6 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

const forThem = [
  "As easy as answering the phone or a text.",
  "Listens as much as it talks.",
  "Meds and appointments, actually done.",
  "Speaks over 50 languages.",
];

const forYou = [
  "Alerts you the moment something feels off.",
  "Tell it what to check on next time, and it will.",
  "Runs on its own, no babysitting, barely any effort on your end.",
  "Can also join your family's group chat.",
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="rounded-[32px] bg-surface px-6 py-10 sm:px-10 sm:py-12">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground text-center mb-10">
          How Nelo works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
          {quickCards.map((card) => (
            <div key={card.title}>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {card.icon}
                </svg>
              </div>
              <h3 className="mt-3 font-display text-lg text-foreground">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm text-foreground/70 leading-snug">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[32px] bg-surface px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">
              For them
            </h3>
            <ul className="flex flex-col gap-3">
              {forThem.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-foreground/80 text-sm leading-snug"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <GroupchatCard />

          <div>
            <h3 className="font-display text-xl text-foreground mb-4">
              For you
            </h3>
            <ul className="flex flex-col gap-3">
              {forYou.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-foreground/80 text-sm leading-snug"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-2xl mx-auto text-center">
        <p className="font-display text-xl sm:text-2xl text-foreground">
          The longer it runs, the more it knows.
        </p>
        <p className="mt-3 text-foreground/70 text-base sm:text-lg leading-relaxed">
          Every check-in adds to the picture, patterns show up clearly over
          weeks, in a way a once-a-week phone call never could.
        </p>
      </div>
    </section>
  );
}
