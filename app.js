const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();

// Configura el middleware CORS
app.use(cors()); // Permite solicitudes desde cualquier origen

// Middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

const equipos = [
  { id: "5182", nombre: "Real Madrid!!", pais: "España" },
  { id: "4216", nombre: "Arsenal", pais: "Inglaterra" },
  { id: "6730", nombre: "dd", pais: "aaa" },
  { id: "3084", nombre: "Arsenal", pais: "Alemania" }
];

// Endpoint para obtener todos los equipos
app.get('/equipos', (req, res) => {
  res.json(equipos);
});

app.post('/equipos', (req, res) => {
  const nuevoEquipo = req.body; // Obtiene los datos del equipo del cuerpo de la solicitud
  //nuevoEquipo.id = Date.now().toString(); // Genera un id único para el nuevo equipo
  equipos.push(nuevoEquipo); // Añade el nuevo equipo al array de equipos
  res.status(201).json(nuevoEquipo); // Responde con el equipo creado y el código 201 (Creado)
});

app.put('/equipos/:id', (req, res) => {
  const { id } = req.params;  // Obtiene el ID del equipo desde la URL
  const equipoActualizado = req.body;  // Obtiene los datos actualizados del cuerpo de la solicitud

  // Encuentra el equipo en el array por su ID
  const indice = equipos.findIndex(equipo => equipo.id === id);

  if (indice !== -1) {
    equipos[indice] = { ...equipos[indice], ...equipoActualizado };  // Actualiza los datos del equipo
    res.status(200).json(equipos[indice]);  // Responde con el equipo actualizado
  } else {
    res.status(404).json({ error: `Equipo con id ${id} no encontrado` });  // Responde con un error si el equipo no existe
  }
});

// Iniciar el servidor en el puerto 3004
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
