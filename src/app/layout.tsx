import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Import the fonts
import "./globals.css";
import Header from "./components/Header";

// Configure the fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book My Show",
  description: "Browse movies, shows, and make bookings on Book My Show.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Metadata and other head tags */}</head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
