import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Ticket, Info, Mail } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { AnimalShowcase } from "@/components/wildlife/AnimalShowcase";
import { WildlifeExplorer } from "@/components/wildlife/WildlifeExplorer";
import { Atmosphere } from "@/components/home/Atmosphere";
import { FactCards } from "@/components/home/FactCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { zooConfig } from "@/config/zoo";

export default function HomePage() {
  return <>
    <Hero />
    <section id="welcome" className="leaf-grid py-24 sm:py-32"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <Reveal className="relative"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem_2rem_8rem_2rem]"><Image src="/images/wildlife/leopard.webp" alt="Illustrative Sri Lankan leopard in lush rainforest" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><div className="absolute -bottom-6 -right-2 rounded-2xl bg-[#153D2D] px-6 py-5 text-white shadow-xl sm:-right-6"><span className="font-display text-4xl text-[#D9AF63]">01</span><p className="mt-1 text-xs uppercase tracking-[.18em] text-white/60">island · countless stories</p></div></Reveal>
      <Reveal delay={.1}><p className="eyebrow text-[#B9714D]">A living world to discover</p><h2 className="font-display mt-5 text-5xl leading-[.95] text-[#153D2D] sm:text-7xl">Where Nature<br /><em className="font-normal text-[#57936A]">Comes Alive.</em></h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#202A23]/70">Experience the wonder of wildlife through memorable encounters, fascinating discoveries, and stories that inspire a deeper connection with the natural world.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#D9AF63] pb-2 font-extrabold text-[#153D2D]">Discover our story <ArrowRight className="h-4 w-4" /></Link></Reveal>
    </div></section>

    <section id="wildlife" className="bg-[#EDE6D4] py-24 sm:py-32"><div className="container-shell"><Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-[#B9714D]">Wildlife discovery</p><h2 className="font-display mt-4 max-w-3xl text-5xl leading-none text-[#153D2D] sm:text-7xl">Meet Our Wild Wonders.</h2></div><p className="max-w-sm text-sm leading-6 text-[#202A23]/60">Illustrative discovery cards celebrate native and endemic species; they do not confirm animals currently housed at a real zoo.</p></Reveal><AnimalShowcase /></div></section>

    <section className="bg-[#F7F3E8] py-24 sm:py-32"><div className="container-shell"><Reveal className="mx-auto mb-12 max-w-3xl text-center"><p className="eyebrow text-[#B9714D]">Wildlife Explorer</p><h2 className="font-display mt-4 text-5xl leading-none text-[#153D2D] sm:text-7xl">Journey Through the Wild.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#202A23]/65">Explore a Sri Lanka-inspired environment shaped around broad habitat themes and remarkable wildlife stories.</p></Reveal><WildlifeExplorer /></div></section>

    <Atmosphere />

    <section className="bg-[#0B241A] py-24 text-white sm:py-32"><div className="container-shell grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow text-[#D9AF63]">A world worth protecting</p><h2 className="font-display mt-5 text-5xl leading-[.95] sm:text-7xl">Protecting Wildlife.<br /><em className="font-normal text-[#87B18D]">Preserving Tomorrow.</em></h2><p className="mt-7 max-w-lg leading-8 text-white/65">ZOOVANA’s fictional conservation vision centers on responsible care, habitat literacy, biodiversity awareness, and learning that lasts beyond a visit.</p><Link href="/about#conservation" className="btn-primary mt-8">Our conservation vision <ArrowRight className="h-4 w-4" /></Link></Reveal><Reveal delay={.1}><FactCards /></Reveal></div></section>

    <section className="py-24 sm:py-32"><div className="container-shell"><Reveal><p className="eyebrow text-[#B9714D]">Plan your visit</p><h2 className="font-display mt-4 text-5xl text-[#153D2D] sm:text-7xl">Your Adventure Starts Here.</h2></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[[Clock3,"Opening hours",zooConfig.openingHours],[MapPin,"Location",zooConfig.address],[Ticket,"Ticket planning","Sample prices · no payment"],[Info,"Visitor information","Guidelines to be confirmed"]].map(([Icon,title,body]) => { const C = Icon as typeof Clock3; return <Reveal key={String(title)}><div className="min-h-60 rounded-[1.6rem] border border-[#153D2D]/12 bg-white p-6 shadow-sm"><C className="h-8 w-8 text-[#B9714D]" /><h3 className="font-display mt-10 text-2xl text-[#153D2D]">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-[#202A23]/60">{String(body)}</p></div></Reveal>; })}
    </div><Link href="/tickets" className="btn-primary mt-8">Plan your visit <ArrowRight className="h-4 w-4" /></Link></div></section>

    <section id="contact" className="leaf-grid bg-[#E6D7B7]/45 py-24 sm:py-32"><div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow text-[#B9714D]">Contact</p><h2 className="font-display mt-4 text-5xl leading-none text-[#153D2D] sm:text-7xl">Let’s Stay<br />Connected.</h2><p className="mt-6 max-w-md text-lg leading-8 text-[#202A23]/65">Have a question about your visit or our wildlife experience? We’d love to hear from you.</p><div className="mt-9 rounded-2xl bg-[#153D2D] p-6 text-white"><Mail className="h-6 w-6 text-[#D9AF63]" /><p className="mt-4 font-bold">Email app handoff</p><p className="mt-2 text-sm leading-6 text-white/60">We prepare a draft in your email application. Nothing is sent automatically.</p></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}
