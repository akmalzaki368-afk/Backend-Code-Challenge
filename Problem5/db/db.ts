import { Pool } from "pg";

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "challenge_db",
    password: "password",
    port: 5432,
});