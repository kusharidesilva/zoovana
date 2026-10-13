import type { Metadata } from "next";
import { GalleryExperience, WildlifeSpotlight } from "@/components/gallery/GalleryExperience";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Wildlife Gallery", description: "Explore illustrative wildlife, nature, and memorable moments in the ZOOVANA visual collection." };
export default function GalleryPage() { return <div className="bg-[#F7F3E8] pt-[76px]"><header className="container-shell py-20 sm:py-28"><Reveal><p className="eyebrow text-[#B9714D]">Visual field notes</p><h1 className="font-display mt-4 text-[clamp(4rem,10vw,8rem)] leading-[.88] text-[#153D2D]">Moments in<br /><em className="font-normal text-[#57936A]">the Wild.</em></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#202A23]/65">Explore wildlife, nature, and memorable moments through our illustrative visual collection.</p></Reveal></header><WildlifeSpotlight /><section className="container-shell py-24"><Reveal><p className="eyebrow mb-5 text-[#B9714D]">Browse the collection</p></Reveal><GalleryExperience /></section></div>; }
