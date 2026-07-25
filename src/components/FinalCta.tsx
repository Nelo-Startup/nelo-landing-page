export default function FinalCta() {
  return (
    <section className="bg-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-background leading-snug">
          The contact that cares for your elders
          <span className="text-[#8fa9c9]"> — and keeps you informed.</span>
        </h2>

        <div className="mt-9 flex flex-col items-center gap-3">
          <button className="rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity">
            Join the Waitlist
          </button>
          <span className="text-sm text-background/60">
            Free for the first 50 families who join.
          </span>
        </div>
      </div>
    </section>
  );
}
