const db = require("../db");

async function seedActorTable() {
  try {
    await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2)",
      ["Aldi", "Taher"]
    );
    await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2)",
      ["Daus", "Mini"]
    );
    await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2)",
      ["Komeng", "Komeng"]
    );
    await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2)",
      ["Andre", "Taulany"]
    );
    await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2)",
      ["Sule", "Sutisna"]
    );

    console.log("Seeding completed for the actor table.");
  } catch (error) {
    console.error("Seeding failed for the actor table:", error);
  }
}

seedActorTable();
