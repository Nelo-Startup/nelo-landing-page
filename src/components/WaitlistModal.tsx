"use client";

import { useEffect, useState } from "react";
import { joinWaitlist } from "@/lib/actions/waitlist";

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setPhone("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await joinWaitlist(name, phone);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("done");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-base font-medium hover:opacity-90 transition-opacity"
      >
        Join the Waitlist
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={close}
            aria-hidden
          />

          <div className="relative w-full max-w-md rounded-[24px] bg-white p-8 animate-[fadeIn_0.2s_ease-out]">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 text-foreground/40 hover:text-foreground text-xl leading-none"
            >
              &times;
            </button>

            {status === "done" ? (
              <div className="text-center py-4">
                <p className="font-serif text-2xl text-foreground">
                  You&apos;re on the list.
                </p>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  We&apos;ll text you when we launch.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl text-foreground">
                  Join the Waitlist
                </h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Free for the first 50 users. We&apos;ll text you when we
                  launch.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-5"
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
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-2 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-accent"
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
                    className="mt-1 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Join the Waitlist"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
