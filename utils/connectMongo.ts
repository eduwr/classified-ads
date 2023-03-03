import { MongoClient } from '../deps.ts';
import config from '../config/defaults.ts';

const {dbUri, dbName} = config

console.log("1")
const client = new MongoClient();
console.log("2", dbUri)

await client.connect(dbUri);
console.log("3")
console.log('? Connected to MongoDB Successfully');

export const db = client.database(dbName);
