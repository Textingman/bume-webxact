import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webxact — Identity Protection for Employees",
  description: "Give your team access to identity theft protection as a workplace benefit. Help employees navigate identity risks with greater confidence and peace of mind.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
