const db = require("../db");

app.get("/film", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM film");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/film/:id", async (req, res) => {
  const filmId = req.params.id;
  try {
    const result = await db.query("SELECT * FROM film WHERE film_id = $1", [
      filmId,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
