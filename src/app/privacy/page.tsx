import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy, Nelo",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="font-serif text-lg font-semibold text-foreground"
      >
        Nelo
      </Link>

      <h1 className="mt-10 font-serif text-3xl text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-foreground/50">
        Last updated: July 2026
      </p>

      <div className="mt-8 flex flex-col gap-6 text-foreground/80 leading-relaxed">
        <p>
          This Privacy Policy describes how Nelo collects, uses, and
          protects information when you or a family member uses our
          service. Questions? Reach out through our{" "}
          <Link href="/contact" className="text-accent underline">
            contact page
          </Link>
          .
        </p>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            What we collect
          </h2>
          <p>
            Account details, like a phone number and basic information
            about the person Nelo will be checking in on. A record of
            check-ins, so we can notice patterns over time and share
            accurate recaps with your family.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            How we use it
          </h2>
          <p>
            To run check-ins by call and text, and deliver recaps to the
            family members you have approved. To help Nelo understand and
            respond naturally, we may use trusted AI providers to process
            conversations. To improve how Nelo talks and listens over time.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            What we do not do
          </h2>
          <p>
            We do not sell your information. We do not use your
            family&apos;s conversations for anything beyond running and
            improving Nelo. We do not take action beyond an actual
            check-in taking place. We do not show ads.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            Data retention and deletion
          </h2>
          <p>
            You can request that we update or delete your information at
            any time through our{" "}
            <Link href="/contact" className="text-accent underline">
              contact page
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            Security
          </h2>
          <p>
            We take reasonable measures to protect your information. No
            system is perfectly secure, but we work to keep access to your
            data limited and safe.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            Third parties
          </h2>
          <p>
            We share information only with the service providers that
            help Nelo work, such as messaging and AI infrastructure
            providers, and only what is needed for the service to
            function.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-2">
            Changes
          </h2>
          <p>
            We may update this policy. Material changes will be reflected
            here with a new date.
          </p>
        </section>
      </div>
    </main>
  );
}
