import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter,Outfit} from "next/font/google";

const inter = Outfit({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Anag AI",
  description: "AI Content Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
        >
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
