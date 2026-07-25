import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "devices.css/dist/devices.min.css";
import "./globals.css";

// Nunito is the logo's typeface, so the whole page shares its rounded,
// friendly shapes. Variable font, so every weight is one download.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelo, the contact that cares for your elders",
  description:
    "The AI contact that cares for your elders, and keeps you informed. A call or text, as natural as talking to a person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
