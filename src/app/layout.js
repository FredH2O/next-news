import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next News | Latest Breaking News",
  description: "A Next.js and Tailwind website to practice Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
