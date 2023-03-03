import { ObjectId } from "../../deps.ts";
import { db } from "../../utils/connectMongo.ts";
import { Advertising } from "./advertising.types.ts";


export const AdvertisingModel = db.collection<Advertising>('advertising');