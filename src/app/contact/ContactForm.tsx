"use client";

import { useState } from "react";
import { sendContactMessage } from "./actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await sendContactMessage(name, email, message);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-[24px] border border-foreground/10 bg-white p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
        <p className="font-display text-2xl text-foreground">Message sent.</p>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-foreground/10 bg-white p-8 flex flex-col gap-5"
    >
      <div>
        <label className="text-xs font-semibold tracking-widest text-foreground/50 uppercase">
          Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="text-xs font-semibold tracking-widest text-foreground/50 uppercase">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="text-xs font-semibold tracking-widest text-foreground/50 uppercase">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={5}
          className="mt-2 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong, mind trying again?
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
