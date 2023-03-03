import { ObjectId } from "../../deps.ts";

export interface Advertising {
  _id?: ObjectId;
  title: string;
  description: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
