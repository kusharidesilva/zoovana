import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() { return <section className="grid min-h-[80vh] place-items-center bg-[#0B241A] px-6 pt-[76px] text-center text-white"><div><Compass className="mx-auto h-12 w-12 text-[#D9AF63]" /><p className="eyebrow mt-6 text-[#D9AF63]">Trail not found · 404</p><h1 className="font-display mt-4 text-6xl sm:text-8xl">You’ve wandered<br />off the map.</h1><p className="mx-auto mt-6 max-w-md leading-7 text-white/60">The path you followed doesn’t exist, but the wild journey continues from home.</p><Link href="/" className="btn-primary mt-8">Return to ZOOVANA</Link></div></section>; }
