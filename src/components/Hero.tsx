import VideoHero from "./VideoHero";
import WaitlistCTA from "./WaitlistCTA";

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
            Your whole gym life, in one conversation.
          </h1>

          <WaitlistCTA />
        </div>

        <div className="pb-10" />
      </div>
    </section>
  );
}
