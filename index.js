// index.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/getpasses", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: "Missing userId" });

  const url = `https://catalog.roblox.com/v1/search/items?creatorTargetId=${userId}&creatorType=User&subcategory=GamePass&limit=30`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch" });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
