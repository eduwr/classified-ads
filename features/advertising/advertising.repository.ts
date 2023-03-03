import { Advertising } from "./advertising.types.ts";
import { Repository } from "../common/repository.types.ts";
import { Collection, ObjectId } from "../../deps.ts";

export class AdvertisingRepository implements Repository<Advertising> {
  constructor(private adModule: Collection<Advertising>) {
  }

  findAll(): Promise<Advertising[]> {
    return this.adModule.find().toArray();
  }

  async findById(id: string | number): Promise<Advertising> {
    const advertising = await this.adModule.findOne({ _id: new ObjectId(id) });
    if (!advertising) {
      // TODO: handle errors correclty
      throw new Error("Not Found!");
    }
    return advertising;
  }

  update(
    id: string | number,
    input: Partial<Advertising>,
  ): Promise<Advertising | undefined> {
    return this.adModule.findAndModify({
      _id: new ObjectId(id),
    }, {
      update: input,
    });
  }

  delete(id: string | number): Promise<number> {
    return this.adModule.deleteOne({ _id: new ObjectId(id) });
  }

  async create(input: Omit<Advertising, "_id">): Promise<string> {
    const inserted = await this.adModule.insertOne(input);
    return inserted.toString();
  }
}
