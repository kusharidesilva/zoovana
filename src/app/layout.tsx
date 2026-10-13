import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zoovana.pages.dev"),
  title: { default: "ZOOVANA | Discover the Wild Within", template: "%s | ZOOVANA" },
  description: "Discover wildlife, explore nature, and plan an unforgettable zoo adventure with ZOOVANA, a Sri Lanka-inspired wildlife experience.",
  openGraph: { title: "ZOOVANA | Discover the Wild Within", description: "A cinematic Sri Lanka-inspired wildlife discovery experience.", type: "website", images: ["/images/wildlife/hero-elephant.webp"] },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="focus-ring fixed left-3 top-3 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 font-bold focus:translate-y-0">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /><Toaster position="bottom-center" richColors /></body></html>;
}
