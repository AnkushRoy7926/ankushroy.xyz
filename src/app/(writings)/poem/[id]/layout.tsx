import type { Metadata } from "next";
import "@styles/globals2.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ankush Roy",
  description: "A personal portfolio website",
};

export default function PoemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
          <body>
            {children}
            <SpeedInsights />
          </body>
        </html>
      );
}