import { dotenvConfig } from "../deps.ts";

console.log("==> ", dotenvConfig);

dotenvConfig({ export: true });

const config: {
  port: number;
  dbUri: string;
  dbName: string;
  apiUrl: string;
} = {
  port: parseInt(Deno.env.get("PORT") as unknown as string),
  dbUri: Deno.env.get("MONGODB_URI") as unknown as string,
  dbName: Deno.env.get("MONGODB_DATABASE_NAME") as unknown as string,
  apiUrl: Deno.env.get("API_URL") as unknown as string,
};

export default config;
