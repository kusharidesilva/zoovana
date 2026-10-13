export type Animal = {
  id: string;
  name: string;
  scientificName: string;
  category: "Mammal" | "Bird" | "Reptile";
  habitat: string;
  diet: string;
  description: string;
  fact: string;
  conservation: string;
  image: string;
  imagePosition?: string;
};

export type GalleryCategory = "All" | "Mammals" | "Birds" | "Reptiles" | "Nature" | "Experiences";
export type GalleryImage = { id: number; title: string; category: Exclude<GalleryCategory, "All">; image: string; alt: string; position?: string };
export type TicketCategory = { id: string; label: string; description: string; priceMinor: number; max: number };
