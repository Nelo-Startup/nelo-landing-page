import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
        <div>
          <span className="font-serif text-xl font-semibold text-foreground">
            Nelo
          </span>
          <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-xs">
            For families who wish they could call more often.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <Link
                href="/contact"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase">
            Legal
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
