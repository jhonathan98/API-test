const { fetchDataCountries } = require('../services/apiService');
const downloadFile = require('../utils/DonwloadFile.js');
const uploadImageFromUrl = require('../utils/UploadFile.js');

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
        await downloadFile("https://via.placeholder.com/150/92c952", './src/files/test1.png');
        console.log('Archivo descargado exitosamente');        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error durante la descarga"});
        
    }
}

const uploadFileBucket = async (req, res) => {
    try {
        const nombrefile = process.env.URL_IMG.split('/')[process.env.URL_IMG.split('/').length-1]
        const response = await uploadImageFromUrl(process.env.URL_IMG, process.env.AWS_BUCKET, nombrefile+".png");
        console.log("Archivo subido exitosamente",response);
        res.json({ message: "Archivo subido exitosamente",response:response });
    } catch (error) {
        console.log("error en el controller",error);
        res.status(500).json({ message: "error durante la carga del archivo"});
    }
}

module.exports = { getDataCountries, getFile, uploadFileBucket };