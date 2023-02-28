import { AdvertisingService } from "./advertising.service.ts";
import { AdvertisingRepository } from "./advertising.repository.ts";

let advertising = [];

export const advertisingModule = new AdvertisingService(
  new AdvertisingRepository(advertising),
);
