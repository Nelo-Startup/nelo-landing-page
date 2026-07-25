import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3ede2] to-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20 sm:pt-10 sm:pb-28">
        <span className="font-serif text-xl font-semibold tracking-tight">
          Nelo
        </span>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight text-foreground">
              The AI contact that cares for your elders
              <span className="text-accent"> — and keeps you informed.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl leading-relaxed">
              A daily call or text, as natural as talking to a person.
              Nothing to download, nothing to learn — for either of you.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3">
              <button className="rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity">
                Join the Waitlist
              </button>
              <span className="text-sm text-foreground/60">
                Free for the first 50 families who join.
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
