"use client";

import { useEffect, useState } from "react";

type Message =
  | { from: "nelo"; kind: "text"; text: string }
  | { from: "you"; kind: "text"; text: string }
  | { from: "you"; kind: "voice"; duration: string };

const script: Message[] = [
  {
    from: "nelo",
    kind: "text",
    text: "Called Mom this morning, she's sounding more excited and feeling better than last week. Took her meds too.",
  },
  {
    from: "you",
    kind: "text",
    text: "Did she mention her doctor's appointment?",
  },
  {
    from: "nelo",
    kind: "text",
    text: "Yes, it's this Friday at 2 PM. I'll remind her the day before.",
  },
  { from: "you", kind: "voice", duration: "0:04" },
  {
    from: "nelo",
    kind: "text",
    text: "Anytime. I'll check in again tomorrow morning. And sure, I'll send your weekly report earlier this week.",
  },
];

const TYPING_DELAY = 950;
const NELO_PAUSE = 1100;
const YOU_PAUSE = 1300;
const LOOP_PAUSE = 2800;

const waveformBars = [4, 8, 6, 11, 5, 9, 7, 4, 8, 6, 4, 7];

function formatSeconds(s: number) {
  return `0:0${s}`;
}

function StatusBar() {
  return (
    <div className="flex items-center pt-[13.75px] text-foreground text-[17px] font-semibold tracking-tight">
      {/* The island is fixed at 120px centred on the 390px screen, so each side
          gets its own equal region and centres its contents inside it — that's
          how iOS lays the status bar out around the cutout. */}
      <div className="flex-1 flex justify-center">
        <span>9:41</span>
      </div>
      <div className="w-[120px] shrink-0" />
      <div className="flex-1 flex items-center justify-center gap-[6.5px]">
        <div className="flex items-end gap-[2px] h-[12px]">
          <span className="w-[4px] h-[6px] bg-foreground rounded-[1px]" />
          <span className="w-[4px] h-[8px] bg-foreground rounded-[1px]" />
          <span className="w-[4px] h-[10px] bg-foreground rounded-[1px]" />
          <span className="w-[4px] h-[12px] bg-foreground rounded-[1px]" />
        </div>
        <svg width="19" height="13.9" viewBox="0 0 15 11" fill="none">
          <path
            d="M3.8 6.3C5.8 4.3 9.2 4.3 11.2 6.3"
            stroke="currentColor"
            className="text-foreground"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M1 3.5C4.9 -0.4 10.1 -0.4 14 3.5"
            stroke="currentColor"
            className="text-foreground"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M7.5 10.5C8.3 10.5 9 9.8 9 9C9 8.2 8.3 7.5 7.5 7.5C6.7 7.5 6 8.2 6 9C6 9.8 6.7 10.5 7.5 10.5Z"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
        <div className="w-[30px] h-[14.5px] rounded-[4.5px] border border-foreground/80 relative flex items-center px-[1.5px]">
          <span className="block w-full h-[9px] bg-foreground rounded-[1px]" />
          <span className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[5px] bg-foreground/80 rounded-r-[1px]" />
        </div>
      </div>
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="mt-7 pb-3.5 text-center border-b border-foreground/10">
      <p className="text-[16px] font-semibold text-foreground">Nelo</p>
    </div>
  );
}

function Bubble({ message }: { message: Message }) {
  const isYou = message.from === "you";

  if (message.kind === "voice") {
    return (
      <div className="flex justify-end animate-[fadeIn_0.25s_ease-out]">
        <div className="bg-ios-blue text-white rounded-[20px] rounded-br-[6px] px-3 py-2.5 flex items-center gap-2 min-w-[160px]">
          <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="white">
              <path d="M0 0l9 4.5L0 9V0z" />
            </svg>
          </span>
          <div className="flex items-center gap-[2px] flex-1">
            {waveformBars.map((h, i) => (
              <span
                key={i}
                className="w-[2px] bg-white/70 rounded-full"
                style={{ height: h }}
              />
            ))}
          </div>
          <span className="text-[12px] text-white/80 shrink-0">
            {message.duration}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex ${isYou ? "justify-end" : "justify-start"} animate-[fadeIn_0.25s_ease-out]`}
    >
      <div
        className={`table max-w-[78%] rounded-[20px] px-4 py-2.5 text-[15px] leading-snug ${
          isYou
            ? "bg-ios-blue text-white rounded-br-[6px]"
            : "bg-ios-gray text-ios-gray-foreground rounded-bl-[6px]"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start animate-[fadeIn_0.25s_ease-out]">
      <div className="bg-ios-gray rounded-[20px] rounded-bl-[6px] px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-[6px] h-[6px] rounded-full bg-ios-gray-foreground/50 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function useLiveConversation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [recording, setRecording] = useState(false);
  const [recordingElapsed, setRecordingElapsed] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    let revealed: Message[] = [];
    let i = 0;

    function typeIntoInput(text: string, index: number, onDone: () => void) {
      if (cancelled) return;
      setDraft(text.slice(0, index));
      if (index >= text.length) {
        wait(onDone, 450);
        return;
      }
      wait(() => typeIntoInput(text, index + 1, onDone), 28 + Math.random() * 40);
    }

    function recordVoice(totalSeconds: number, onDone: () => void) {
      if (cancelled) return;
      setRecording(true);
      setRecordingElapsed(0);
      let elapsed = 0;
      function tick() {
        if (cancelled) return;
        elapsed += 1;
        setRecordingElapsed(elapsed);
        if (elapsed >= totalSeconds) {
          wait(() => {
            setRecording(false);
            setRecordingElapsed(0);
            onDone();
          }, 350);
        } else {
          wait(tick, 1000);
        }
      }
      wait(tick, 1000);
    }

    function step() {
      if (cancelled) return;
      if (i >= script.length) {
        wait(() => {
          revealed = [];
          i = 0;
          setMessages([]);
          setTyping(false);
          setDraft("");
          step();
        }, LOOP_PAUSE);
        return;
      }

      const msg = script[i];
      if (msg.from === "nelo") {
        setTyping(true);
        wait(() => {
          setTyping(false);
          revealed = [...revealed, msg];
          setMessages(revealed);
          i += 1;
          wait(step, NELO_PAUSE);
        }, TYPING_DELAY);
      } else if (msg.kind === "voice") {
        const totalSeconds = parseInt(msg.duration.split(":")[1], 10);
        recordVoice(totalSeconds, () => {
          revealed = [...revealed, msg];
          setMessages(revealed);
          i += 1;
          wait(step, YOU_PAUSE);
        });
      } else {
        typeIntoInput(msg.text, 0, () => {
          setDraft("");
          revealed = [...revealed, msg];
          setMessages(revealed);
          i += 1;
          wait(step, YOU_PAUSE);
        });
      }
    }

    step();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return { messages, typing, draft, recording, recordingElapsed };
}

const SCALE = 0.58;
const FRAME_WIDTH = 428;
const FRAME_HEIGHT = 868;

export default function PhoneMockup() {
  const { messages, typing, draft, recording, recordingElapsed } =
    useLiveConversation();

  return (
    <div
      className="relative drop-shadow-[0_35px_60px_rgba(43,39,36,0.35)]"
      style={{ width: FRAME_WIDTH * SCALE, height: FRAME_HEIGHT * SCALE }}
    >
      <div
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div className="device device-iphone-14-pro">
          <div className="device-frame">
            <div className="device-screen overflow-hidden bg-white flex flex-col">
              <StatusBar />
              <ContactHeader />

              <div className="flex-1 px-5 py-4 flex flex-col gap-3 overflow-hidden">
                {messages.map((m, i) => (
                  <Bubble key={i} message={m} />
                ))}
                {typing && <TypingBubble />}
              </div>

              <div className="px-5 pt-3 pb-2 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-foreground/25 flex items-center justify-center text-foreground/40 text-lg leading-none shrink-0">
                  +
                </div>
                <div className="flex-1 rounded-full border border-foreground/20 px-4 py-2 text-[14px] min-h-[34px] flex items-center gap-1.5 overflow-hidden">
                  {recording ? (
                    <>
                      <div className="flex items-center gap-[2px] flex-1">
                        {waveformBars.map((h, i) => (
                          <span
                            key={i}
                            className="w-[2px] bg-red-400 rounded-full animate-pulse"
                            style={{ height: h }}
                          />
                        ))}
                      </div>
                      <span className="text-[13px] text-red-500 font-medium tabular-nums shrink-0">
                        {formatSeconds(recordingElapsed)}
                      </span>
                    </>
                  ) : draft ? (
                    <>
                      <span className="text-foreground whitespace-nowrap">
                        {draft}
                      </span>
                      <span className="w-[1.5px] h-[15px] bg-foreground/70 animate-pulse shrink-0" />
                    </>
                  ) : (
                    <span className="text-foreground/35">Text Message</span>
                  )}
                </div>
                {recording ? (
                  <span className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-white" />
                  </span>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-foreground/40 shrink-0"
                  >
                    <path
                      d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M19 11a7 7 0 01-14 0M12 18v3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>

              <div className="pb-2.5 flex items-center justify-center">
                <div className="w-[134px] h-[5px] rounded-full bg-foreground/70" />
              </div>
            </div>
          </div>
          <div className="device-stripe" />
          <div className="device-header" />
          <div className="device-sensors" />
          <div className="device-btns" />
          <div className="device-power" />
        </div>
      </div>
    </div>
  );
}
