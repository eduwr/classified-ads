import { Advertising } from "./advertising.types.ts";
import { Repository } from "../common/repository.types.ts";

export class AdvertisingRepository implements Repository<Advertising> {
  // TODO receive database config instead of an in memory array
  constructor(private advertising: Advertising[]) {
  }

  findAll(): Advertising[] {
    return this.advertising;
  }

  findById(id: string | number): Advertising {
    return this.advertising.find((ad) => ad.advertisingId === id);
  }

  update(id: string | number, input: Partial<Advertising>): Advertising {
    const adIndex = this.advertising.findIndex((ads) =>
      ads.advertisingId === id
    );

    if (!adIndex) {
      throw new Error("Advertising not found");
    }

    this.advertising[adIndex] = {
      ...this.advertising[adIndex],
      ...input,
    };

    return this.advertising[adIndex];
  }

  delete(id: string | number): void {
    this.advertising = this.advertising.filter(
      (ads) => ads.advertisingId !== id,
    );
  }

  create(input: Advertising): Advertising {
    this.advertising.push(input);
    return input;
  }
}
