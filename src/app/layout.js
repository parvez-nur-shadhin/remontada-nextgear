import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ItemsProvider } from "@/context/ItemsContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextGear | Pro Developer Hardware & Peripherals",
  description:
    "Remontada Next.js Assessment Task built with App Router, DaisyUI, and Firebase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-base-100 text-base-content`}
      >
        <AuthProvider>
          <ItemsProvider>
            <Suspense
              fallback={
                <div className="h-16 bg-base-100 border-b border-base-200" />
              }
            >
              <Navbar />
            </Suspense>

            <main className="flex-1">{children}</main>

            <Footer />
          </ItemsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
