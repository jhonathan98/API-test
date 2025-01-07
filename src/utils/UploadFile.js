const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const https = require('https');

const s3Client = new S3Client({
    region: process.env.AWS_REGION_AWS,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

async function uploadImageFromUrl(url, bucketName, fileName) {
    return new Promise((resolve, reject) => {
        https.get(url, async (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Error al descargar: ${response.statusCode}`));
                return;
            }

            let chunks = [];
            response.on('data', chunk => chunks.push(chunk));
            response.on('end', async () => {
                const imageBuffer = Buffer.concat(chunks);
                
                try {
                    const command = new PutObjectCommand({
                        Bucket: bucketName,
                        Key: fileName,
                        Body: imageBuffer,
                        ContentType: 'image/jpeg'
                    });

                    const result = await s3Client.send(command);
                    resolve(result);
                } catch (error) {
                    console.log("error al intentar subir",error);
                    reject(error);
                }
            });
        }).on('error', (err)=>{
            console.log("Error del https get: ",err);
            reject(err);
        });
    });
}

module.exports = uploadImageFromUrl;