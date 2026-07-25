const stats = [
  {
    number: "53 million",
    label: "Americans are already providing unpaid care for aging family.",
  },
  {
    number: "1 in 5",
    label: "Americans will be over 65 by 2030.",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-foreground/10 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-10 sm:gap-16">
        {stats.map((stat) => (
          <div key={stat.number}>
            <p className="font-serif text-4xl sm:text-5xl text-accent">
              {stat.number}
            </p>
            <p className="mt-3 text-foreground/75 text-lg leading-snug max-w-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
