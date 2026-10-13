"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import type { GalleryCategory, GalleryImage } from "@/types";

const filters: GalleryCategory[] = ["All", "Mammals", "Birds", "Reptiles", "Nature", "Experiences"];

export function GalleryExperience() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const items = filter === "All" ? galleryImages : galleryImages.filter(i => i.category === filter);
  const move = useCallback((direction: number) => { if (!selected) return; const index = items.findIndex(i => i.id === selected.id); setSelected(items[(index + direction + items.length) % items.length]); }, [selected, items]);
  useEffect(() => { const key = (e: KeyboardEvent) => { if (!selected) return; if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [selected, move]);
  return <>
    <div className="mb-10 flex max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter gallery">
      {filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`focus-ring shrink-0 rounded-full px-5 py-3 text-sm font-extrabold transition ${filter === item ? "bg-[#153D2D] text-white" : "border border-[#153D2D]/15 bg-white text-[#153D2D] hover:bg-[#E6D7B7]"}`} aria-pressed={filter === item}>{item}</button>)}
    </div>
    <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      <AnimatePresence>{items.map((item, index) => <motion.button layout key={item.id} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} onClick={() => setSelected(item)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D9AF63]" style={{ aspectRatio: index % 4 === 0 ? "4/5" : index % 3 === 0 ? "1/1" : "4/3" }}>
        <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-gradient-to-t from-[#071710]/80 via-transparent to-transparent opacity-80" /><div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left text-white transition group-hover:translate-y-0"><p className="eyebrow text-[#D9AF63]">{item.category}</p><h3 className="font-display mt-1 text-2xl">{item.title}</h3></div>
      </motion.button>)}</AnimatePresence>
    </motion.div>
    <Dialog.Root open={!!selected} onOpenChange={open => !open && setSelected(null)}><AnimatePresence>{selected && <Dialog.Portal forceMount><Dialog.Overlay asChild><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-[#06140f]/95 backdrop-blur-sm" /></Dialog.Overlay><Dialog.Content asChild aria-describedby="gallery-caption"><motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-10">
      <Dialog.Title className="sr-only">{selected.title}</Dialog.Title><Dialog.Close className="focus-ring absolute right-5 top-5 z-10 rounded-full bg-white p-3 text-[#153D2D]" aria-label="Close lightbox"><X /></Dialog.Close>
      <button onClick={() => move(-1)} className="focus-ring absolute left-3 z-10 rounded-full bg-white/90 p-3 text-[#153D2D] sm:left-8" aria-label="Previous image"><ChevronLeft /></button><div className="relative h-[72dvh] w-[min(88vw,1100px)]"><Image src={selected.image} alt={selected.alt} fill sizes="90vw" className="object-contain" /><p id="gallery-caption" className="absolute inset-x-0 -bottom-14 text-center text-sm text-white/70">{selected.title} · Illustrative visual</p></div><button onClick={() => move(1)} className="focus-ring absolute right-3 z-10 rounded-full bg-white/90 p-3 text-[#153D2D] sm:right-8" aria-label="Next image"><ChevronRight /></button>
    </motion.div></Dialog.Content></Dialog.Portal>}</AnimatePresence></Dialog.Root>
  </>;
}

export function WildlifeSpotlight() {
  const [ref, api] = useEmblaCarousel({ loop: true });
  return <div className="overflow-hidden" ref={ref}><div className="flex">{galleryImages.slice(0, 4).map(item => <div className="relative min-w-0 flex-[0_0_100%]" key={item.id}><div className="relative min-h-[70vh]"><Image src={item.image} alt={item.alt} fill sizes="100vw" className="object-cover" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-gradient-to-r from-[#0B241A]/85 via-[#0B241A]/20 to-transparent" /><div className="container-shell relative flex min-h-[70vh] items-end py-16 text-white sm:items-center"><div className="max-w-xl"><p className="eyebrow text-[#D9AF63]">Wildlife spotlight · {item.category}</p><h2 className="font-display mt-4 text-5xl sm:text-7xl">{item.title}</h2><p className="mt-5 max-w-md leading-7 text-white/70">A cinematic glimpse into the habitats and wild character that inspire ZOOVANA.</p><div className="mt-7 flex gap-3"><button onClick={() => api?.scrollPrev()} className="focus-ring rounded-full border border-white/40 p-3" aria-label="Previous spotlight"><ChevronLeft /></button><button onClick={() => api?.scrollNext()} className="focus-ring rounded-full border border-white/40 p-3" aria-label="Next spotlight"><ChevronRight /></button></div></div></div></div></div>)}</div></div>;
}
