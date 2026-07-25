import Image from "next/image";
import PhoneMockup from "./PhoneMockup";
import WaitlistModal from "./WaitlistModal";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-porch.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-6 pb-10 flex-1 flex flex-col">
        <Logo
          variant="cream"
          height={26}
          priority
          className="self-start drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        />

        <div className="mt-6 sm:mt-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 flex-1">
          <div className="max-w-xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
              The AI contact that cares for your elders,
              <span className="text-white/90"> and keeps you informed.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-lg drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
              A call or text, as natural as talking to a person.
              Nothing to download, nothing to learn, for either of you.
            </p>

            <div className="mt-4 flex flex-col items-start gap-2">
              <WaitlistModal />
              <span className="max-w-[190px] text-sm text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
                Free for the first 50 users.
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0 lg:justify-end lg:items-start lg:h-full">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
