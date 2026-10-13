import type { Animal } from "@/types";

export const animals: Animal[] = [
  {
    id: "elephant", name: "Asian Elephant", scientificName: "Elephas maximus", category: "Mammal",
    habitat: "Forests, grasslands and scrublands", diet: "Herbivore",
    description: "A magnificent symbol of Asian wildlife and one of the island’s most recognized mammals.",
    fact: "Asian elephants use low-frequency calls that can travel long distances.",
    conservation: "Listed as Endangered on the IUCN Red List (assessment current at publication review, 2024).",
    image: "/images/wildlife/hero-elephant.webp", imagePosition: "72% center"
  },
  {
    id: "leopard", name: "Sri Lankan Leopard", scientificName: "Panthera pardus kotiya", category: "Mammal",
    habitat: "Dry-zone forest, rainforest and montane habitat", diet: "Carnivore",
    description: "A remarkable leopard subspecies found only in Sri Lanka.",
    fact: "As the island’s largest wild cat, it occupies an important ecological role.",
    conservation: "The Sri Lankan subspecies is listed as Vulnerable on the IUCN Red List.",
    image: "/images/wildlife/leopard.webp"
  },
  {
    id: "langur", name: "Purple-Faced Langur", scientificName: "Semnopithecus vetulus", category: "Mammal",
    habitat: "Rainforests and wooded landscapes", diet: "Primarily leaves, fruit and flowers",
    description: "An endemic Sri Lankan primate, recognized by its dark face and silvery coat.",
    fact: "This arboreal species spends much of its life moving through the forest canopy.",
    conservation: "Listed as Endangered on the IUCN Red List.", image: "/images/wildlife/langur.webp"
  },
  {
    id: "junglefowl", name: "Sri Lankan Junglefowl", scientificName: "Gallus lafayettii", category: "Bird",
    habitat: "Forest and scrub across Sri Lanka", diet: "Seeds, fruit and small invertebrates",
    description: "Sri Lanka’s brilliantly colored endemic national bird.",
    fact: "The male’s vivid comb has a distinctive yellow center.",
    conservation: "Listed as Least Concern on the IUCN Red List.", image: "/images/wildlife/sunset.webp"
  },
  {
    id: "sloth-bear", name: "Sloth Bear", scientificName: "Melursus ursinus", category: "Mammal",
    habitat: "Dry forests and scrublands", diet: "Insects, fruit and other plant material",
    description: "A shaggy-coated bear adapted to feeding on termites and ants.",
    fact: "Its flexible lips help create suction when feeding on insects.",
    conservation: "Listed as Vulnerable on the IUCN Red List.", image: "/images/wildlife/leopard.webp", imagePosition: "85% center"
  },
  {
    id: "crocodile", name: "Saltwater Crocodile", scientificName: "Crocodylus porosus", category: "Reptile",
    habitat: "Estuaries, rivers, mangroves and coastal wetlands", diet: "Carnivore",
    description: "A powerful reptile found in suitable coastal and wetland habitats.",
    fact: "It can tolerate both fresh and salt water.",
    conservation: "Listed as Least Concern globally on the IUCN Red List.", image: "/images/wildlife/sunset.webp", imagePosition: "center bottom"
  }
];
