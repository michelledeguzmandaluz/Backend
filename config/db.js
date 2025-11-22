/*import mysql from "mysql2/promise.js"

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: "",
    database: process.env.DATABASE
})

export default pool;*/

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD || "",  // use .env PASSWORD or empty string
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
