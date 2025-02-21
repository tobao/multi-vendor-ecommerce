import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";

//Global Styles
import "./globals.css";

//Theme Provider
import { ThemeProvider } from "next-themes";

//Clerk Provider 
import {
  ClerkProvider
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from '@clerk/nextjs'


import {Toaster} from "@/components/ui/toaster"
import {Toaster as SonnerToaster} from "@/components/ui/sonner"
import ModalProvider from "@/providers/modal-provider";

//Fonts 
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

// Metadata configurations
export const metadata: Metadata = {
  title: "GoShop",
  description: "A multi-vendor e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <html lang="en">
        <body
          className={`${interFont.className} ${barlowFont.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
            <Toaster/>
            <SonnerToaster position="bottom-left"/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
