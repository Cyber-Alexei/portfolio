import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Alexei Torres",
    default: "Alexei Torres",
    template: "%s | Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-opensans antialiased`}>{children}</body>
    </html>
  );
}
