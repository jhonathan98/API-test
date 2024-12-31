const express = require('express');
const apiRoutes = require('./src/routes/apiRoutes');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000; // Puerto por defecto 3000

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/colombia', async (req, res) => {
    try {
        const response = await axios.get('https://api-colombia.com/api/v1/Country/Colombia');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});