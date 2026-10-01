import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pragati Kavra | Full Stack Developer",
  description: "Portfolio of Pragati Kavra: full-stack developer, MERN, Java and DSA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
