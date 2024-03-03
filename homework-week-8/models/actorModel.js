const db = require("../db");

const getAllActors = async () => {
  const result = await db.query("SELECT * FROM actor");
  return result.rows;
};

module.exports = {
  getAllActors,
};
