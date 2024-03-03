const express = require("express");
const filmModel = require("../models/filmModel");
const actorModel = require("../models/actorModel");

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

router.get("/film-category", async (req, res) => {
  try {
    const filmsByCategories = await filmModel.getFilmsWithCategories();
    res.json(filmsByCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/actors", async (req, res) => {
  try {
    const actors = await actorModel.getAllActors();
    res.json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
