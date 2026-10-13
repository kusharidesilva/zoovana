"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

export function TicketFaq() { return <Accordion.Root type="single" collapsible className="divide-y divide-[#153D2D]/12 border-y border-[#153D2D]/12">{faqs.map((item,i) => <Accordion.Item key={item.question} value={`item-${i}`}><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl text-[#153D2D]"><span>{item.question}</span><ChevronDown className="h-5 w-5 shrink-0 transition group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden pb-6 text-sm leading-7 text-[#202A23]/65 data-[state=closed]:animate-[accordion-up_.2s_ease-out] data-[state=open]:animate-[accordion-down_.2s_ease-out]">{item.answer}</Accordion.Content></Accordion.Item>)}</Accordion.Root>; }
