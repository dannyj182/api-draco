const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// Ruta para obtener todos los documentos de una colección
app.get('/entity/:id', async (req, res) => {
  try {
    const idEntidad = req.params.id;
    const nombreColeccion = `entity-x002fxffff${idEntidad}xffffAirQualityObserved`
    // Conexión a la base de datos local de MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useUnifiedTopology: true
    });
    const db = client.db('draco-openiot');

    // Obtener todos los documentos de la colección
    const documentos = await db.collection(nombreColeccion).find().toArray();

    res.json(documentos);
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    res.status(500).json({ error: 'Error al obtener los documentos' });
  }
});

// Puerto en el que se ejecutará la API
const PORT = 8081;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});