import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PJ Site Services — High Desert Site Services",
  description:
    "Storage, cleaning, pressure washing, fleet washing, landscaping, and site support for the High Desert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
