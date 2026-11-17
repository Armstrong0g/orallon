import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ORALLON | Beyond Possibilities",
    template: "%s | ORALLON",
  },

  description:
    "ORALLON connects people and businesses with technology products, digital solutions and opportunities for progress.",

  applicationName: "ORALLON",

  openGraph: {
    title: "ORALLON | Beyond Possibilities",
    description:
      "A modern business connecting commerce, technology and digital possibilities.",
    siteName: "ORALLON",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ORALLON | Beyond Possibilities",
    description:
      "Connecting commerce, technology and digital possibilities.",
  },

  robots: {
    index: true,
    follow: true,
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