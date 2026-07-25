import Image from "next/image";

const SRC = {
  charcoal: "/logo-charcoal.png",
  cream: "/logo-cream.png",
} as const;

// Source art is 538x200; every usage sets a height and lets width follow.
const RATIO = 538 / 200;
const MARK_RATIO = 208 / 160;

/**
 * The cloud mark on its own, for avatar-sized spots where the wordmark would
 * be illegible. Its interior is knocked out, so whatever sits behind it shows
 * through the cloud — put it on a light surface.
 */
export function LogoMark({
  height,
  className,
}: {
  height: number;
  className?: string;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Nelo"
      width={Math.round(height * MARK_RATIO)}
      height={height}
      className={className}
    />
  );
}

export default function Logo({
  variant = "charcoal",
  height,
  className,
  priority,
}: {
  /** charcoal (#3A3128) for light backgrounds, cream (#FDF8F0) for dark ones */
  variant?: keyof typeof SRC;
  /** rendered height in px */
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt="Nelo"
      width={Math.round(height * RATIO)}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
