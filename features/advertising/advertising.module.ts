import { AdvertisingService } from "./advertising.service.ts";
import { AdvertisingRepository } from "./advertising.repository.ts";
import { AdvertisingModel } from "./advertising.model.ts";

export const advertisingModule = new AdvertisingService(
  new AdvertisingRepository(AdvertisingModel),
);
