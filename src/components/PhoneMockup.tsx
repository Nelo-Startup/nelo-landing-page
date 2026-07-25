type Notification = {
  time: string;
  body: string;
};

const notifications: Notification[] = [
  {
    time: "now",
    body: "Checked in with Mom — she's doing well, took her morning meds.",
  },
  {
    time: "9:02 AM",
    body: "Called Mom for 12 min — she mentioned her knee's feeling better.",
  },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-3 text-white text-[13px] font-medium tracking-tight">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[2px] h-[10px]">
          <span className="w-[3px] h-[4px] bg-white rounded-[1px]" />
          <span className="w-[3px] h-[6px] bg-white rounded-[1px]" />
          <span className="w-[3px] h-[8px] bg-white rounded-[1px]" />
          <span className="w-[3px] h-[10px] bg-white rounded-[1px]" />
        </div>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path
            d="M7.5 10.5C8.3 10.5 9 9.8 9 9C9 8.2 8.3 7.5 7.5 7.5C6.7 7.5 6 8.2 6 9C6 9.8 6.7 10.5 7.5 10.5Z"
            fill="white"
          />
          <path
            d="M3.8 6.3C5.8 4.3 9.2 4.3 11.2 6.3"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M1 3.5C4.9 -0.4 10.1 -0.4 14 3.5"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="w-[22px] h-[11px] rounded-[3px] border border-white/80 relative flex items-center px-[1.5px]">
          <span className="block w-full h-[6px] bg-white rounded-[1px]" />
          <span className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-white/80 rounded-r-[1px]" />
        </div>
      </div>
    </div>
  );
}

function NotificationCard({ notification }: { notification: Notification }) {
  return (
    <div className="rounded-[20px] bg-white/25 backdrop-blur-xl border border-white/30 px-3.5 py-3 text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-[6px] bg-accent flex items-center justify-center shrink-0">
          <span className="text-[11px] font-serif font-semibold leading-none">
            N
          </span>
        </div>
        <span className="text-[13px] font-semibold flex-1">Nelo</span>
        <span className="text-[12px] text-white/70">{notification.time}</span>
      </div>
      <p className="text-[13px] leading-snug mt-1.5 text-white/95">
        {notification.body}
      </p>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="relative select-none [transform:rotate(3deg)] drop-shadow-[0_35px_60px_rgba(43,39,36,0.35)]">
      <div className="w-[290px] h-[600px] sm:w-[310px] sm:h-[640px] rounded-[52px] bg-[#0b0b0d] p-[14px] border border-black/40">
        <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-b from-[#5b7ba8] via-[#7b93b0] to-[#a9a29a]">
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[95px] h-[28px] rounded-full bg-black z-20" />
          <StatusBar />

          <div className="mt-8 text-center text-white">
            <p className="text-[15px] font-medium text-white/90">
              Thursday, July 24
            </p>
            <p className="font-serif text-[64px] leading-none mt-1 font-medium">
              9:41
            </p>
          </div>

          <div className="mt-8 px-3.5 flex flex-col gap-2.5">
            {notifications.map((n) => (
              <NotificationCard key={n.time} notification={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
