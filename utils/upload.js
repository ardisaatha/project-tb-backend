const multer = require('multer');

// Konfigurasi penyimpanan file
const storage = multer.memoryStorage(); // Menyimpan file dalam bentuk buffer di memory

const upload = multer({ storage: storage });

module.exports = upload;
