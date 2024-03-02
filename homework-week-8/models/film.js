const db = require("../db");

const getAllFilms = async () => {
  const result = await db.query("SELECT * FROM film");
  return result.rows;
};

const getFilmById = async (filmId) => {
  const result = await db.query("SELECT * FROM film WHERE film_id = $1", [filmId]);
  return result.rows[0];
};

const getAllCategories = async () => {
  const result = await db.query("SELECT * FROM category");
  return result.rows;
};

const getFilmsByCategory = async () => {
  const result = await db.query();
  return result.rows;
};

module.exports = {
  getAllFilms,
  getFilmById,
  getAllCategories,
  getFilmsByCategory,
};
