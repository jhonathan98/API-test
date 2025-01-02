const express = require('express');
const apiRoutes = require('./src/routes/apiRoutes');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000; // Puerto por defecto 3000

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/test1', async (req, res) => {
    try {
        // Ejemplo de petición a una API externa
        const response = await axios.get('https://api-colombia.com/api/v1/CountryColombia');
        res.json({ 
            message: 'Hola mundo',
            externalData: response.data
        });
    } catch (error) {
        console.log(error)
        res.json({ message: 'Hola mundo', error: error.message });
    }
});

app.get('/api/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Colombia' });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});