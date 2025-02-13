const https = require('https');
const fs = require('fs');

function downloadFile(url, outputPath) {
    return new Promise((resolve, reject) => {
        // Crear el stream de escritura
        const fileStream = fs.createWriteStream(outputPath);

        // Realizar la petición HTTPS
        https.get(url, (response) => {
            // Verificar el código de estado
            if (response.statusCode !== 200) {
                reject(new Error(`Error al descargar: ${response.statusCode}`));
                return;
            }

            // Pipe la respuesta al archivo
            response.pipe(fileStream);

            // Manejar eventos
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
                console.log('Archivo descargado exitosamente!!!!!!!');
            });

            fileStream.on('error', (err) => {
                // Eliminar el archivo en caso de error
                console.log("Error en el fileStrem.on: ",err);
                fs.unlink(outputPath, () => reject(err));
            });
        }).on('error', (err) => {
            // Eliminar el archivo en caso de error
            console.log("Error del https get: ",err);
            fs.unlink(outputPath, () => reject(err));
        });
    });
}

module.exports = downloadFile;