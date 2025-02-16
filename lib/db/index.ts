import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryString = process.env.NEXT_PUBLIC_DATABASE_URL as string;
export const connection = postgres(queryString);

export const db = drizzle(connection);
