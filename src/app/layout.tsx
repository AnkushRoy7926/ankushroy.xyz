import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ankush Roy",
  description: "A personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Navbar></Navbar>
        {children}
        <SpeedInsights />
      </body>

    </html>
  );
}
