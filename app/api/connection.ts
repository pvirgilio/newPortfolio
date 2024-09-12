import { Pool } from "pg";
// Create a new pool instance with your database connection details
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432, // default PostgreSQL port
  database: process.env.POSTGRES_DB,
});

// Test the connection
pool.connect(({ err, client, release }: any) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to PostgreSQL database");

  // Release the client back to the pool
  release();
});

export default pool;
