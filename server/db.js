const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_vacations_db"
);

module.exports = {
  client,
};
