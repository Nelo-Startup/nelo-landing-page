import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact, Nelo",
};

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="font-serif text-lg font-semibold text-foreground"
      >
        Nelo
      </Link>

      <h1 className="mt-10 font-serif text-3xl text-foreground">Contact us</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-[24px] bg-surface p-8">
          <p className="font-serif text-xl text-foreground">
            Please fill out the form.
          </p>

          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex items-center gap-3 text-sm text-foreground/70">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Replies within one business day
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/70">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9.5 9a2.5 2.5 0 014.5 1.5c0 1.5-2 1.5-2 3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="17" r="0.75" fill="currentColor" />
                </svg>
              </span>
              Feature ideas, product help, or questions
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
