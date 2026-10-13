import type { TicketCategory } from "@/types";

export const ticketCategories: TicketCategory[] = [
  { id: "local-adult", label: "Local Adult", description: "Sample category · age rules to be confirmed", priceMinor: 250000, max: 10 },
  { id: "local-child", label: "Local Child", description: "Sample category · age rules to be confirmed", priceMinor: 120000, max: 10 },
  { id: "international-adult", label: "International Adult", description: "Sample category · eligibility to be confirmed", priceMinor: 650000, max: 10 },
  { id: "international-child", label: "International Child", description: "Sample category · eligibility to be confirmed", priceMinor: 350000, max: 10 }
];

export const formatLKR = (minor: number) => new Intl.NumberFormat("en-LK", { style: "currency", currency: "LKR", maximumFractionDigits: 0 }).format(minor / 100);
