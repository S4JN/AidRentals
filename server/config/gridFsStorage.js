const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: 'your_mongodb_connection_string', // Replace with your MongoDB connection string
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: 'inventory_images', // Name of the bucket to store the images
      filename: file.originalname, // Use the original file name as the filename in the bucket
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
