import type { Metadata } from "next";
import { Roboto, Rubik_Scribble } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--roboto",
});

const rubick = Rubik_Scribble({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--rubic-scribble",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Karrot Market",
    default: "Karrot Market",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rubick.variable} font-roboto bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
