"use client";

import { useState } from "react";

export default function WaitlistCTA() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const close = () => {
    setOpen(false);
    setStatus("idle");
    setName("");
    setPhone("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#fdf8f0] px-8 py-4 text-sm font-semibold tracking-wide text-[#1a1a1a] transition-transform hover:scale-105"
      >
        JOIN WAITLIST &nbsp;→
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl border border-white/20 bg-black/40 p-8 text-[#fdf8f0] shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-start justify-between">
              <h2 className="font-serif text-2xl">Join the waitlist</h2>
              <button
                onClick={close}
                aria-label="Close"
                className="text-[#fdf8f0]/70 transition-colors hover:text-[#fdf8f0]"
              >
                ✕
              </button>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <p className="font-serif text-xl">You&apos;re on the list.</p>
                <p className="text-sm text-[#fdf8f0]/70">We&apos;ll be in touch soon.</p>
                <button
                  onClick={close}
                  className="mt-2 rounded-full bg-[#fdf8f0] px-6 py-3 text-sm font-semibold tracking-wide text-[#1a1a1a] transition-transform hover:scale-105"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#fdf8f0] placeholder-[#fdf8f0]/50 outline-none focus:border-white/40"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#fdf8f0] placeholder-[#fdf8f0]/50 outline-none focus:border-white/40"
                />

                {status === "error" && (
                  <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 rounded-full bg-[#fdf8f0] px-6 py-3 text-sm font-semibold tracking-wide text-[#1a1a1a] transition-transform hover:scale-105 disabled:opacity-60"
                >
                  {status === "submitting" ? "Joining…" : "JOIN WAITLIST →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
