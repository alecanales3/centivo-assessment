const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

mongoose.connect("mongodb://localhost:27017/centivo-db");

app.get("/users/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id, age: { $gt: 21 } });
  if (!user) return res.status(404).json({ error: "User not found or age <= 21" });
  res.json(user);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
