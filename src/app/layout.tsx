import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Boring Trader",
  description: "A Lazy guy who loves trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 border-b">
          <TopNav></TopNav>
        </div>
        <div>
          <div className="flex w-[100%]">
            <SideNav />
            <div className="w-[82%] m-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
