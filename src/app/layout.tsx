import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransition } from "@/components/motion/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Iwhuruohna FIRST Movement (IFM). Unity, Loyalty, Duty",
    template: "%s. Iwhuruohna FIRST Movement",
  },
  description:
    "The Iwhuruohna FIRST Movement (IFM) is a nationalist movement protecting the Iwhuruohna woman, man, and child. Based in Port Harcourt, Rivers State, Nigeria. Unity, Loyalty, Duty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionConfig reducedMotion="user">
            <TooltipProvider delayDuration={150}>
              <Navbar />
              <main className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <Toaster position="bottom-right" />
            </TooltipProvider>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
