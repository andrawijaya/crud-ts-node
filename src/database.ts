import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "12345",
  database: "firstapi",
  port: 5432,
});
