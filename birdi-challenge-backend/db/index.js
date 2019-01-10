// all database interactions will initially go through this file
// as suggested by: https://node-postgres.com/guides/project-structure
const { Pool } = require('pg');

// gives access to variables in .env
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
