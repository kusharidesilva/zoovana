"use client";

import Image from "next/image";
import { useState } from "react";
import { animals } from "@/data/animals";
import { Map, List } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const points = [
  { animal: animals[0], x: 48, y: 62 }, { animal: animals[1], x: 43, y: 31 }, { animal: animals[2], x: 57, y: 18 }, { animal: animals[4], x: 37, y: 52 }
];

export function WildlifeExplorer() {
  const [active, setActive] = useState(points[0].animal);
  const [list, setList] = useState(false);
  return <div className="overflow-hidden rounded-[2rem] bg-[#0B241A] text-white shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4"><p className="text-sm font-bold">Illustrated habitat explorer</p><button onClick={() => setList(v => !v)} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-bold md:hidden">{list ? <Map className="h-4 w-4" /> : <List className="h-4 w-4" />}{list ? "Map" : "List"}</button></div>
    <div className="grid md:grid-cols-[1.35fr_.65fr]">
      <div className={`${list ? "hidden" : "block"} relative min-h-[480px] overflow-hidden bg-[#153D2D] md:block`}>
        <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 60% 30%, #57936A 0, transparent 30%), radial-gradient(circle at 30% 70%, #D9AF6344 0, transparent 26%)" }} />
        <svg viewBox="0 0 420 520" aria-label="Stylized Sri Lanka-inspired habitat regions; not an official animal location map" className="absolute left-1/2 top-1/2 h-[88%] -translate-x-1/2 -translate-y-1/2 fill-[#86AA79] stroke-[#F7F3E8]/30 stroke-[2] drop-shadow-2xl"><path d="M246 21c-29 11-42 42-40 72 2 31-31 42-39 73-7 28 10 53-1 78-10 22-37 31-42 56-8 38 19 66 30 98 12 34 10 80 44 97 20 10 48-14 62-31 20-25 22-59 34-89 12-31 33-58 29-94-3-28-24-44-26-71-3-36 26-67 20-104-6-37-31-100-71-85Z" /></svg>
        {points.map(point => <button key={point.animal.id} onClick={() => setActive(point.animal)} aria-label={`Explore ${point.animal.name}`} className="marker-pulse focus-ring absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#D9AF63]" style={{ left: `${point.x}%`, top: `${point.y}%` }} />)}
        <p className="absolute bottom-4 left-5 max-w-xs text-xs leading-5 text-white/60">Educational visualization only. Markers represent broad habitat themes, not animal population locations.</p>
      </div>
      <div className={`${!list ? "hidden" : "block"} p-6 md:block md:p-8`}>
        <div className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-1">{points.map(point => <button key={point.animal.id} onClick={() => setActive(point.animal)} className={`focus-ring rounded-xl px-4 py-3 text-left text-sm font-bold transition ${active.id === point.animal.id ? "bg-[#D9AF63] text-[#0B241A]" : "bg-white/7 text-white/70 hover:bg-white/12"}`}>{point.animal.name}</button>)}</div>
        <AnimatePresence mode="wait"><motion.div key={active.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={active.image} alt={active.name} fill sizes="360px" className="object-cover" /></div><p className="eyebrow mt-6 text-[#D9AF63]">{active.habitat}</p><h3 className="font-display mt-2 text-3xl">{active.name}</h3><p className="mt-3 text-sm leading-6 text-white/65">{active.fact}</p>
        </motion.div></AnimatePresence>
      </div>
    </div>
  </div>;
}
