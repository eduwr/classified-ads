import { Advertising } from "./advertising.types.ts";

const advertising: Advertising[] = [
  {
    advertisingId: "1",
    title: "ad 1",
    description: "this is a short description",
    category: "Relationship",
    tags: ["Love", "Enchant", "Magic"],
  },
  {
    advertisingId: "2",
    title: "ad 2",
    description: "this is a short description",
    category: "Relationship",
    tags: ["Love", "Enchant", "Magic"],
  },
];

export const getAdvertisings: () => Advertising[] = () => advertising;

export const createAdvertising = (input: Partial<Advertising>): Advertising => {
  const ads = {
    advertisingId: (Math.random() * 1000).toString(),
    title: input.title || "",
    description: input.description || "",
    category: input.category || "",
    tags: input.tags || [],
  };

  advertising.push(ads)

  return ads
};
