"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw } from "lucide-react";

const facts = [
  ["Elephant conversations", "Asian elephants communicate with deep rumbles, including sounds below the range of human hearing."],
  ["A canopy specialist", "The purple-faced langur is endemic to Sri Lanka and spends much of its life among the branches."],
  ["Island identity", "The Sri Lankan junglefowl is endemic to the island and is recognized as its national bird."],
  ["Built for wetlands", "Saltwater crocodiles can move between freshwater and marine environments."]
];
export function FactCards() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(v => (v + 1) % facts.length);
  return <div className="relative overflow-hidden rounded-[2rem] bg-[#D9AF63] p-7 text-[#0B241A] sm:p-10"><p className="eyebrow">Did you know?</p><div className="min-h-40 pt-5"><AnimatePresence mode="wait"><motion.div key={index} initial={{ opacity: 0, rotateX: -12, y: 12 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} exit={{ opacity: 0, rotateX: 12, y: -12 }}><h3 className="font-display text-4xl sm:text-5xl">{facts[index][0]}</h3><p className="mt-4 max-w-xl text-base leading-7">{facts[index][1]}</p></motion.div></AnimatePresence></div><button onClick={next} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B241A] px-5 py-3 text-sm font-bold text-white"><RefreshCw className="h-4 w-4" />Reveal another fact</button></div>;
}
