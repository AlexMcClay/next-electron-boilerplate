"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col gap-1">
          <Link
            href={"/"}
            className={`${segment === null && "bg-slate-500 text-white"} `}
          >
            Home
          </Link>
          <Link
            href={"/first"}
            className={`${segment === "first" && "bg-slate-500 text-white"} `}
          >
            First
          </Link>
          <Link
            href={"/second"}
            className={`${segment === "second" && "bg-slate-500 text-white"} `}
          >
            Second
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
