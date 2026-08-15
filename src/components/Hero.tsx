import VideoHero from "./VideoHero";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <VideoHero />

      <div className="relative z-10 flex h-full w-full flex-col items-center px-6 text-center text-[#fdf8f0]">
        <div className="pt-10">
          <span className="text-lg tracking-wide">Nelo</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            The contact who remembers your <em className="italic">whole training life</em>.
          </h1>

          <button className="rounded-full bg-[#fdf8f0] px-8 py-4 text-sm font-semibold tracking-wide text-[#1a1a1a] transition-transform hover:scale-105">
            JOIN WAITLIST &nbsp;→
          </button>
        </div>

        <div className="pb-10" />
      </div>
    </section>
  );
}
