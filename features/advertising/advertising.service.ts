import { Advertising } from "./advertising.types.ts";

let advertising: Advertising[] = [];

export const getAdvertisings: () => Advertising[] = () => advertising;

export const createAdvertising = (input: Partial<Advertising>): Advertising => {
  const ads = {
    advertisingId: advertising.length + 1,
    title: input.title || "",
    description: input.description || "",
    category: input.category || "",
    tags: input.tags || [],
  };

  advertising.push(ads);

  return ads;
};

export const deleteAdvertising = (advertisingId: number): void => {
  advertising = advertising.filter((ads) =>
    ads.advertisingId !== advertisingId
  );
};

export const updateAdvertising = (
  advertisingId: number,
  input: Partial<Advertising>,
): void => {
  const adIndex = advertising.findIndex((ads) =>
    ads.advertisingId === advertisingId
  );

  if (!adIndex) {
    throw new Error("Advertising not found");
  }

  advertising[adIndex] = {
    ...advertising[adIndex],
    ...input,
  };
};
