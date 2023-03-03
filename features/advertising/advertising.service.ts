import { Advertising } from "./advertising.types.ts";
import { Repository } from "../common/repository.types.ts";

export class AdvertisingService {
  constructor(private advertisingRepository: Repository<Advertising>) {
  }
  index: () => Promise<Advertising[]> = () => this.advertisingRepository.findAll();

  create = (input: Partial<Advertising>) => {
    const ads = {
      title: input.title || "",
      description: input.description || "",
      category: input.category || "",
      tags: input.tags || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.advertisingRepository.create(ads);
  };

  delete = (advertisingId: number | string) => {
    let id = advertisingId;
    if (typeof advertisingId === "string") {
      id = parseInt(advertisingId, 10);
    }
    return this.advertisingRepository.delete(id);
  };

  update = (
    advertisingId: number,
    input: Partial<Advertising>,
  ) => {
    return this.advertisingRepository.update(advertisingId, input);
  };
}
