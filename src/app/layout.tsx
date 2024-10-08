import type { Metadata } from "next";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mainDiv">
      <body>
        {children}
      </body>
    </html>
  );
}
