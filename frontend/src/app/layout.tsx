import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports Streaming Platform",
  description: "Watch live sports and catch up on demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-secondary text-white min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 4000,
              style: { background: "#333", color: "#fff" },
            }}
          />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
