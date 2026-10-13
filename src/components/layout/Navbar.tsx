"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/gallery", label: "Gallery" }, { href: "/tickets", label: "Tickets" }, { href: "/#contact", label: "Contact" }];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const transparent = pathname === "/" && !scrolled && !open;
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", transparent ? "text-white" : "bg-[#F7F3E8]/95 text-[#153D2D] shadow-[0_8px_35px_rgba(11,36,26,.08)] backdrop-blur-xl")}>
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Logo light={transparent} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(link => <Link key={link.href} href={link.href} className={cn("focus-ring relative rounded-sm py-2 text-sm font-bold", pathname === link.href && "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#D9AF63]")}>{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/tickets" className={cn("hidden rounded-full px-5 py-3 text-sm font-extrabold sm:inline-flex", transparent ? "bg-white text-[#153D2D]" : "bg-[#153D2D] text-white")}>Plan tickets <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
          <button className="focus-ring rounded-full p-3 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] bg-[#0B241A] px-6 py-12 text-[#F7F3E8] lg:hidden">
            <nav className="container-shell flex flex-col" aria-label="Mobile navigation">
              {links.map((link, i) => <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .06 }}><Link onClick={() => setOpen(false)} href={link.href} className="focus-ring block border-b border-white/15 py-5 font-display text-4xl">{link.label}</Link></motion.div>)}
              <Link href="/tickets" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">Start ticket enquiry</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
