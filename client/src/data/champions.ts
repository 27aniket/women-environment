import poonam from "@/assets/champion-poonam.jpg";
import sunita from "@/assets/champion-sunita.jpg";
import ksahu from "@/assets/champion-ksahu.jpg";

export interface Champion {
  id: string;
  name: string;
  role: string;
  plantationType: string;
  cardImage: string;
  detailImage: string;
  treesPlanted: number;
  acres: number;
  co2Tons: number;
  location: string;
  latitude: string;
  longitude: string;
  plantationDate: string;
  description: string;
  impact: string;
  gallery: string[];
}

export const champions: Champion[] = [
  {
    id: "poonam-mango",
    name: "Poonam Singh",
    role: "Lead Green Champion",
    plantationType: "Mango Plantation",
    cardImage: poonam,
    detailImage: poonam,
    treesPlanted: 1000,
    acres: 12,
    co2Tons: 48,
    location: "Mihijam, Jharkhand",
    latitude: "24.2065° N",
    longitude: "86.8278° E",
    plantationDate: "12 July 2024",
    description:
      "Poonam Singh leads a community of women farmers transforming barren land into thriving mango orchards. Her plantation provides livelihood to 40+ families while restoring local biodiversity.",
    impact:
      "Over 1,000 mango saplings planted, restoring 12 acres of degraded land and offsetting an estimated 48 tons of CO₂ annually.",
    gallery: [poonam, poonam, poonam, poonam],
  },
  {
    id: "sunita-sanjiv",
    name: "Sunita Sanjiv",
    role: "Community Green Leader",
    plantationType: "Guava Plantation",
    cardImage: sunita,
    detailImage: sunita,
    treesPlanted: 850,
    acres: 9,
    co2Tons: 36,
    location: "Hazaribagh, Jharkhand",
    latitude: "23.9925° N",
    longitude: "85.3637° E",
    plantationDate: "5 August 2024",
    description:
      "Sunita Sanjiv mobilises rural women to lead guava plantation drives that generate sustainable income while greening her village. Her work has inspired three neighbouring panchayats.",
    impact:
      "850 guava trees planted across 9 acres, with 36 tons of estimated annual CO₂ sequestration.",
    gallery: [sunita, sunita, sunita, sunita],
  },
  {
    id: "k-sahu",
    name: "K Sahu",
    role: "Green Champion",
    plantationType: "Mixed Native Plantation",
    cardImage: ksahu,
    detailImage: ksahu,
    treesPlanted: 1200,
    acres: 15,
    co2Tons: 58,
    location: "Dhanbad, Jharkhand",
    latitude: "23.7957° N",
    longitude: "86.4304° E",
    plantationDate: "20 September 2024",
    description:
      "K Sahu champions native-species plantation, blending fruit and timber trees to revive soil health and create long-term ecological resilience for her community.",
    impact:
      "Restored 15 acres of land with 1,200 native saplings, sequestering ~58 tons of CO₂ each year.",
    gallery: [ksahu, ksahu, ksahu, ksahu],
  },
];

export const getChampion = (id: string) => champions.find((c) => c.id === id);
