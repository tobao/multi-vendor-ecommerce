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
    <ClerkProvider>
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
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
