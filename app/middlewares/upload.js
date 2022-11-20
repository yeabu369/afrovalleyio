const util = require('util');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/files');
  },
  filename: (req, file, callback) => {
    const match = ['image/png', 'image/jpeg', 'application/pdf'];

    if (match.indexOf(file.mimetype) === -1) {
      const message = `<strong>${file.originalname}</strong> is invalid. Only accept png/jpeg/pdf.`;
      return callback(message, null);
    }

    const filename = `${Date.now()}${file.originalname}`;
    callback(null, filename);
  },
});

const uploadFiles = multer({ storage }).array('multi-files', 10);
const uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
