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

const getFilmsWithCategories = async () => {
  const result = await db.query(`
   SELECT
  film.film_id,
  film.title,
  category.category_id,
  category.name
FROM
  film
INNER JOIN
  film_category ON film.film_id = film_category.film_id
INNER JOIN
  category ON film_category.category_id = category.category_id
  `);
  return result.rows;
};

module.exports = {
  getAllFilms,
  getFilmById,
  getAllCategories,
  getFilmsWithCategories,
};
