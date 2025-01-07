const { fetchDataCountries } = require('../services/apiService');
const downloadFile = require('../utils/DonwloadFile.js');

const getDataCountries = async (req, res) => {
    try {
        const data = await fetchDataCountries('/Country/Colombia');
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFile = async (req, res) => {
    try {
        console.log('Iniciando descarga...');
        downloadFile("https://via.placeholder.com/150/92c952", './test1.img');
        console.log('Archivo descargado exitosamente');        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

module.exports = { getDataCountries, getFile };