const express = require("express");
const filmModel = require("../models/film");

const router = express.Router();

router.get("/films", async (req, res) => {
  try {
    const films = await filmModel.getAllFilms();
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/films/:id", async (req, res) => {
  const filmId = req.params.id;
  try {
    const film = await filmModel.getFilmById(filmId);
    res.json(film);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await filmModel.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/film-category/:id", async (req, res) => {
  try {
    const filmsByCategory = await filmModel.getFilmsByCategory();
    res.json(filmsByCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
