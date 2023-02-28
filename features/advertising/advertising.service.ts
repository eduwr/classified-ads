import { Advertising } from "./advertising.types.ts";
import { Repository } from "../common/repository.types.ts";

export class AdvertisingService {
  constructor(private advertisingRepository: Repository<Advertising>) {
  }
  index: () => Advertising[] = () => this.advertisingRepository.findAll();

  create = (input: Partial<Advertising>): Advertising => {
    const ads = {
      advertisingId: this.index().length + 1,
      title: input.title || "",
      description: input.description || "",
      category: input.category || "",
      tags: input.tags || [],
    };

    return this.advertisingRepository.create(ads);
  };

  delete = (advertisingId: number | string): void => {
    let id = advertisingId;
    if (typeof advertisingId === "string") {
      id = parseInt(advertisingId, 10);
    }
    return this.advertisingRepository.delete(id);
  };

  update = (
    advertisingId: number,
    input: Partial<Advertising>,
  ): Advertising => {
    return this.advertisingRepository.update(advertisingId, input);
  };
}
