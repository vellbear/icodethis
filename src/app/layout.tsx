import type { Metadata } from "next";
import "./globals.css";
import "./globalicons.css";

export const metadata: Metadata = {
  title: "My iCodeThis Challenges",
  description: "My completed iCodeThis challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
