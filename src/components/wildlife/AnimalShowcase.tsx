"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { animals } from "@/data/animals";
import { useState } from "react";
import type { Animal } from "@/types";

export function AnimalShowcase() {
  const [selected, setSelected] = useState<Animal | null>(null);
  return <>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {animals.slice(0, 6).map((animal, index) => (
        <motion.button key={animal.id} onClick={() => setSelected(animal)} className="group relative min-h-[420px] overflow-hidden rounded-[1.7rem] text-left shadow-[0_18px_50px_rgba(11,36,26,.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D9AF63]" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 250, damping: 22 }}>
          <Image src={animal.image} alt={animal.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: animal.imagePosition }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081d15] via-[#081d15]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <span className="eyebrow text-[#D9AF63]">{animal.category} · 0{index + 1}</span>
            <h3 className="font-display mt-2 text-3xl">{animal.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{animal.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Discover the story <ArrowUpRight className="h-4 w-4" /></span>
          </div>
        </motion.button>
      ))}
    </div>
    <Dialog.Root open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
      <AnimatePresence>{selected && <Dialog.Portal forceMount>
        <Dialog.Overlay asChild><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-[#071710]/80 backdrop-blur-md" /></Dialog.Overlay>
        <Dialog.Content asChild aria-describedby="animal-description"><motion.div initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: .97 }} className="fixed left-1/2 top-1/2 z-[80] grid max-h-[88dvh] w-[min(92vw,920px)] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[2rem] bg-[#F7F3E8] shadow-2xl md:grid-cols-[.95fr_1.05fr]">
          <div className="relative min-h-[280px] md:min-h-[620px]"><Image src={selected.image} alt={selected.name} fill sizes="50vw" className="object-cover" style={{ objectPosition: selected.imagePosition }} /></div>
          <div className="p-7 md:p-10">
            <Dialog.Close className="focus-ring absolute right-4 top-4 rounded-full bg-white/90 p-3 text-[#153D2D]" aria-label="Close animal details"><X /></Dialog.Close>
            <p className="eyebrow text-[#B9714D]">Wildlife field note</p><Dialog.Title className="font-display mt-3 text-4xl text-[#153D2D] md:text-5xl">{selected.name}</Dialog.Title>
            <p className="mt-1 italic text-[#57936A]">{selected.scientificName}</p><p id="animal-description" className="mt-6 leading-7 text-[#202A23]/75">{selected.description}</p>
            <dl className="mt-7 grid gap-5 sm:grid-cols-2"><div><dt className="eyebrow text-[#57936A]">Habitat</dt><dd className="mt-2 text-sm leading-6">{selected.habitat}</dd></div><div><dt className="eyebrow text-[#57936A]">Diet</dt><dd className="mt-2 text-sm leading-6">{selected.diet}</dd></div></dl>
            <div className="mt-7 rounded-2xl bg-[#E6D7B7]/55 p-5"><p className="eyebrow text-[#B9714D]">Did you know?</p><p className="mt-2 leading-7">{selected.fact}</p></div>
            <p className="mt-6 text-xs leading-5 text-[#202A23]/60">{selected.conservation} Status statements should be rechecked against current IUCN assessments before a real-world launch.</p>
          </div>
        </motion.div></Dialog.Content>
      </Dialog.Portal>}</AnimatePresence>
    </Dialog.Root>
  </>;
}
