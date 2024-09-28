import localFont from "next/font/local";
import "./globals.css";
import * as React from "react";
import NavComp from "../../components/NavComp";
import Providers from "./providers";
import Sidebar from "../../components/Sidebar";

// This is Rootlayout.

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Covid-19 Dashboard",
  description: "This website contains data for Covid-19.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* This is the provider for changing theme */}
        <Providers>
          {/* Navbar */}
          <div className="dark:bg-foreground dark:text-background">
            <NavComp />
          </div>

          {/* Main layout with Sidebar */}
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 p-4 overflow-y-auto transition-all duration-300 dark:bg-slate-950">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
