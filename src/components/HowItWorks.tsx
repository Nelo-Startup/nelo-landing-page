const forThem = [
  "Every conversation adds to a real picture of them — not just today, but the pattern over weeks.",
  "A daily call or text, real conversation — not a script.",
  "Medications and appointments, followed through until it's actually done.",
  "Miss a check-in, and family hears about it right away.",
];

const forYou = [
  "Ask anything, anytime — grounded in what Nelo's actually seen.",
  "Tell it what to check on next time, and it will.",
  "Get a recap by text or call — automatically every week, or on demand whenever you want one.",
  "Loop in your whole family, right from your group chat.",
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="max-w-xl mx-auto text-center rounded-2xl bg-surface px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-foreground/85 text-base sm:text-lg">
          Text us, or hop on a 5-minute call. Give us their number.{" "}
          <span className="font-medium text-foreground">
            That&apos;s the whole setup.
          </span>
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h3 className="font-serif text-2xl text-foreground">For them</h3>
          <ul className="mt-6 flex flex-col gap-4">
            {forThem.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/80 leading-snug">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-foreground">For you</h3>
          <ul className="mt-6 flex flex-col gap-4">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/80 leading-snug">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 max-w-2xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl leading-snug text-foreground">
          The longer it runs, the more it knows.
        </p>
        <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
          Every check-in adds to the picture — mood, habits, the small things
          that repeat. Patterns show up clearly over weeks, in a way a
          once-a-week phone call never could.
        </p>
      </div>
    </section>
  );
}
