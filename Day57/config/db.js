import {Pool} from "pg"
import "dotenv/config"
const NEON_DB = process.env.NDB;
const local_DB = process.env.PG_DATABASE;
// const db = new Pool({
//    host: "localhost",
//    port: 5432,
//    user: "jhon",
//    database: "bibek",
//    password: "password"
// })
//console.log("The NEON DB", NEON_DB, local_DB);
export const db = new Pool({
   connectionString: local_DB
});

export const db2 = new Pool({
   connectionString: NEON_DB
});

db.on("connect", () => console.log("connected successfully"));
db.on("error", (err) => console.log("something went wrong", err));


