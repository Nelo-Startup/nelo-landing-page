import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service, Nelo",
};

export default function TermsOfService() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="inline-block">
        <Logo height={26} />
      </Link>

      <h1 className="mt-10 font-display text-3xl text-foreground">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-foreground/50">
        Last updated: July 2026
      </p>

      <div className="mt-8 flex flex-col gap-6 text-foreground/80 leading-relaxed">
        <p>
          These terms govern your use of Nelo. By using Nelo, you agree to
          them. If you do not agree, please do not use the service.
          Questions? Reach out through our{" "}
          <Link href="/contact" className="text-accent underline">
            contact page
          </Link>
          .
        </p>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            The service
          </h2>
          <p>
            Nelo checks in on the person you have signed up, by call or
            text, and shares updates with the family members you have
            approved. Nelo is currently in early access, and provided as
            is. Features may change, break, or be removed while we build.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Your account
          </h2>
          <p>
            You must provide accurate information, including a valid phone
            number for the person Nelo will be checking in on. You are
            responsible for keeping this information up to date and for
            anyone you give access to your family&apos;s account. You must
            be old enough to form a binding agreement in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Acceptable use
          </h2>
          <p>
            Do not use Nelo for anything unlawful, or to harass or harm
            another person. Do not attempt to break, overload, reverse
            engineer, or gain unauthorized access to the service. Only sign
            up family members you are authorized to sign up.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Subscriptions and billing
          </h2>
          <p>
            Nelo is currently free during early access. If we introduce
            paid plans in the future, we will give you notice before any
            charges apply.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Your content
          </h2>
          <p>
            You and your family retain rights to the information you share
            with Nelo. We use it only to operate the service on your
            behalf, as described in our{" "}
            <Link href="/privacy" className="text-accent underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Disclaimers
          </h2>
          <p>
            Nelo is provided as is. AI can make mistakes: check-ins,
            summaries, and recaps may be wrong or incomplete. Nelo is not a
            substitute for medical advice or emergency services. If someone
            is in immediate danger, call your local emergency number
            directly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Limitation of liability
          </h2>
          <p>
            To the extent permitted by law, Nelo and its operators are not
            liable for indirect, incidental, or consequential damages,
            including missed or mishandled check-ins. Our total liability
            for any claim is limited to the amount you have paid us, if
            any, in the twelve months before the claim.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Termination
          </h2>
          <p>
            You may stop using Nelo at any time. We may suspend or end
            access if these terms are violated, or to protect the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground mb-2">
            Changes and governing law
          </h2>
          <p>
            We may update these terms. Material changes will be posted
            here with a new date.
          </p>
        </section>
      </div>
    </main>
  );
}
