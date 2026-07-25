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
    text: "Called her at 9am — she's doing well, took her meds, and mentioned her knee was bothering her a bit.",
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
        <span className="text-[11px] text-foreground/45 mb-0.5 ml-1">
          {message.label}
        </span>
      )}
      <div
        className={`max-w-[80%] rounded-[18px] px-4 py-2.5 text-[14.5px] leading-snug ${
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

export default function GroupchatShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
          Loop in the whole family.
        </h2>
        <p className="mt-4 text-foreground/70 text-lg">
          Add Nelo to the group chat you already have with your family — ask
          it anything, right alongside everyone else.
        </p>
      </div>

      <div className="max-w-md mx-auto rounded-[28px] bg-white shadow-[0_20px_50px_rgba(43,39,36,0.12)] border border-foreground/5 overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/8">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#d8c9a3] border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-[#a3b8d8] border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-accent border-2 border-white flex items-center justify-center">
              <span className="text-white text-[11px] font-serif font-semibold">
                N
              </span>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-foreground leading-none">
              Mom&apos;s Care
            </p>
            <p className="text-[12px] text-foreground/50 mt-1">
              You, Sam, Nelo
            </p>
          </div>
        </div>

        <div className="px-5 py-6 flex flex-col gap-4 bg-[#fbfaf7]">
          {messages.map((m, i) => (
            <Bubble key={i} message={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
