import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./components/Provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Gallery",
  description:
    "Browse through countless cat pictures from all around the world. See more about cats, crazy cats, cute cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
      </head>
      <ReactQueryProvider>
        <body className={inter.className}>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
