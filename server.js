const express = require("express");
const app = express();

app.get("/users/:id", (req, res) => {
  res.json({ message: `User ID requested: ${req.params.id}` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
