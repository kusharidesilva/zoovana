import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="ZOOVANA home" className="focus-ring inline-flex items-center gap-2 rounded-md">
      <svg aria-hidden="true" width="34" height="34" viewBox="0 0 42 42" fill="none">
        <path d="M21 3C11 7 5 14 5 23c0 9 7 16 16 16s16-7 16-16C37 14 31 7 21 3Z" fill={light ? "#D9AF63" : "#153D2D"}/>
        <path d="M11 25c7-1 13-6 19-14-1 11-6 18-15 22" stroke="#F7F3E8" strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M15 21c4 .1 7 1 10 3" stroke="#F7F3E8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className={`font-display text-[1.35rem] tracking-[.12em] ${light ? "text-[#F7F3E8]" : "text-[#153D2D]"}`}>ZOOVANA</span>
    </Link>
  );
}
