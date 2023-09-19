const express = require('express');
const app = express();
const port = 3000;

// Parte de los datos
const datos = {
  '1': 'Ejemplo 1',
  '2': 'Ejemplo 2',
  '3': 'Prueba 1',
  "4": "Prueba 2",
 };


app.use(express.json());


app.get('/elementos', (req, res) => {
  res.json(datos);
});


app.get('/elementos/:id', (req, res) => {
  const id = req.params.id;
  const elemento = datos[id];

  if (!elemento) {
    return res.status(404).json({ mensaje: 'Elemento no encontrado' });
  }

  res.json({ id, nombre: elemento });
});

// Codigo para poder iniciar el server
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
