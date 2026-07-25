import { LogoMark } from "./Logo";

type Message = {
  from: "sister" | "nelo" | "you";
  label?: string;
  text: string;
};

const messages: Message[] = [
  { from: "sister", label: "Sam", text: "hey has anyone heard from mom today?" },
  {
    from: "nelo",
    label: "Nelo",
    text: "Called her at 9am, she's in a great mood, told me a whole story about the neighbor's new puppy.",
  },
  {
    from: "you",
    text: "thanks Nelo! can you ask about her PT appointment next time",
  },
  { from: "nelo", label: "Nelo", text: "Got it, I'll ask tomorrow." },
];

function Bubble({ message }: { message: Message }) {
  const isYou = message.from === "you";
  return (
    <div className={`flex flex-col ${isYou ? "items-end" : "items-start"}`}>
      {message.label && (
        <span className="text-[10px] text-foreground/45 mb-0.5 ml-1">
          {message.label}
        </span>
      )}
      <div
        className={`table max-w-[85%] rounded-[16px] px-3.5 py-2 text-[13px] leading-snug ${
          isYou
            ? "bg-ios-blue text-white rounded-br-[4px]"
            : "bg-ios-gray text-ios-gray-foreground rounded-bl-[4px]"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export default function GroupchatCard() {
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-[24px] bg-white shadow-[0_20px_50px_rgba(43,39,36,0.12)] border border-foreground/5 overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-foreground/8">
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-[#d8c9a3] border-2 border-white" />
          <div className="w-7 h-7 rounded-full bg-[#a3b8d8] border-2 border-white" />
          <div className="w-7 h-7 rounded-full bg-surface border-2 border-white flex items-center justify-center">
            <LogoMark height={11} />
          </div>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-foreground leading-none">
            Mom&apos;s Care
          </p>
          <p className="text-[11px] text-foreground/50 mt-1">You, Sam, Nelo</p>
        </div>
      </div>

      <div className="px-4 py-4 flex flex-col gap-3 bg-[#fbfaf7]">
        {messages.map((m, i) => (
          <Bubble key={i} message={m} />
        ))}
      </div>
    </div>
  );
}
