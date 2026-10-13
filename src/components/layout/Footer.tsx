import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { zooConfig } from "@/config/zoo";

export function Footer() {
  return <footer className="relative overflow-hidden bg-[#0B241A] pb-8 pt-16 text-[#F7F3E8]">
    <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#57936A]/25" />
    <div className="container-shell grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.3fr_.7fr_.8fr]">
      <div><Logo light /><p className="mt-5 max-w-sm text-white/65">{zooConfig.tagline}<br />A cinematic, fictional wildlife experience inspired by Sri Lanka.</p><Link href="/tickets" className="mt-7 inline-flex items-center gap-2 font-bold text-[#D9AF63]">Plan your adventure <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div><p className="eyebrow text-[#D9AF63]">Explore</p><nav className="mt-5 grid gap-3 text-white/75"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/gallery">Gallery</Link><Link href="/tickets">Tickets</Link><Link href="/#contact">Contact</Link></nav></div>
      <div><p className="eyebrow text-[#D9AF63]">Visit notes</p><p className="mt-5 flex gap-3 text-white/70"><MapPin className="mt-1 h-4 w-4 shrink-0" />{zooConfig.address}</p><p className="mt-4 flex gap-3 text-white/70"><Clock className="mt-1 h-4 w-4 shrink-0" />{zooConfig.openingHours}</p></div>
    </div>
    <div className="container-shell flex flex-col gap-2 pt-7 text-xs text-white/50 sm:flex-row sm:justify-between"><p>Made with a love for wildlife and nature.</p><p>Portfolio demonstration · Not an official zoo booking service.</p></div>
  </footer>;
}
