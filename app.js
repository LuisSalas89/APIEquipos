const express = require('express');
const app = express();

const equipos = [
  { id: "5182", nombre: "Real Madrid!!", pais: "España" },
  { id: "4216", nombre: "Arsenal", pais: "Inglaterra" },
  { id: "6730", nombre: "dd", pais: "aaa" },
  { id: "3084", nombre: "Arsenal", pais: "Alemania" }
];

app.get('/equipos', (req, res) => {
  res.json(equipos);
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
