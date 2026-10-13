"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function Atmosphere() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 900) return;
    let ctx: { revert: () => void } | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default; const ScrollTrigger = stModule.ScrollTrigger; gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(".atmosphere-image", { scale: 1.08 }, { scale: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 } });
        gsap.fromTo(".atmosphere-copy", { y: 80, opacity: .3 }, { y: 0, opacity: 1, scrollTrigger: { trigger: root.current, start: "top 75%", end: "center center", scrub: .8 } });
      }, root);
    });
    return () => ctx?.revert();
  }, []);
  return <section ref={root} className="relative min-h-[78vh] overflow-hidden bg-[#B9714D] text-white">
    <div className="atmosphere-image absolute inset-0"><Image src="/images/wildlife/sunset.webp" alt="Illustrative Sri Lankan wetland and forest at golden hour" fill sizes="100vw" className="object-cover" /></div><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,36,26,.82),rgba(11,36,26,.16)),linear-gradient(0deg,rgba(185,113,77,.55),transparent_60%)]" />
    <div className="container-shell atmosphere-copy relative flex min-h-[78vh] items-center py-24"><div className="max-w-xl"><p className="eyebrow text-[#F1C97A]">Forest to sunset</p><h2 className="font-display mt-5 text-5xl leading-[.98] sm:text-7xl">Every wild place holds a future.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/75">A gentle shift from green to gold reminds us that protecting habitats means protecting every story within them.</p></div></div>
  </section>;
}
