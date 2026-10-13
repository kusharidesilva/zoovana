"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const reduced = useReducedMotion();
  return <section className="relative min-h-[100svh] overflow-hidden bg-[#0B241A] text-white">
    <motion.div className="absolute inset-0" initial={reduced ? false : { scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: "easeOut" }}><Image src="/images/wildlife/hero-elephant.webp" alt="Illustrative Asian elephant walking through a sunlit tropical forest" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "70% center" }} /></motion.div>
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,13,.86)_0%,rgba(4,19,13,.52)_47%,rgba(4,19,13,.16)_75%),linear-gradient(0deg,rgba(4,19,13,.7),transparent_55%)]" />
    <div className="ambient-leaf absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#57936A]/15 blur-3xl" /><div className="absolute right-[19%] top-[16%] h-40 w-40 rounded-full bg-[#D9AF63]/25 blur-3xl" />
    <div className="container-shell relative flex min-h-[100svh] items-end pb-24 pt-32 sm:items-center sm:pb-0">
      <div className="max-w-[720px]">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }} className="eyebrow text-[#D9AF63]">Welcome to ZOOVANA</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38, duration: .9, ease: [.22,1,.36,1] }} className="font-display mt-5 text-[clamp(3.35rem,8vw,7.5rem)] leading-[.88]">Step Into a<br /><em className="font-normal text-[#E6D7B7]">World of Wonder.</em></motion.h1>
        <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62, duration: .7 }} className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Discover incredible wildlife, unforgettable adventures, and the beauty of nature in the heart of Sri Lanka.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .78 }} className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="btn-primary" href="#wildlife">Explore the zoo <ArrowRight className="h-4 w-4" /></Link><Link className="btn-secondary border-white/50 text-white hover:text-[#0B241A]" href="/tickets"><span>Plan your visit</span></Link></motion.div>
      </div>
    </div>
    <a href="#welcome" aria-label="Scroll to discover" className="focus-ring absolute bottom-8 right-6 hidden items-center gap-3 rounded-full text-xs font-bold uppercase tracking-[.2em] sm:flex md:right-12"><span className="grid h-11 w-11 place-items-center rounded-full border border-white/40"><ArrowDown className="h-4 w-4" /></span>Scroll to discover</a>
    <div aria-hidden="true" className="absolute -bottom-1 left-0 h-20 w-full bg-[#F7F3E8] [clip-path:polygon(0_70%,8%_55%,17%_76%,28%_38%,40%_72%,52%_42%,63%_74%,75%_48%,86%_71%,100%_39%,100%_100%,0_100%)]" />
  </section>;
}
