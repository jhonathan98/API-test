const express = require('express');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Puerto por defecto 3000

app.use(express.json());
app.use('/api', apiRoutes);


app.get('/api/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Colombia' });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});