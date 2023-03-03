import { MongoClient } from '../deps.ts';
import config from '../config/mongo.ts';

const {dbUri, dbName} = config

const client = new MongoClient();
await client.connect(dbUri);
console.log('? Connected to MongoDB Successfully');

export const db = client.database(dbName);
