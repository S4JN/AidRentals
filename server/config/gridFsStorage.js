const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: `${process.env.MONGO_URL}`, // Replace with your MongoDB connection string
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


// const {GridFsStorage} = require('multer-gridfs-storage');

// const storage = new GridFsStorage({
//   url: 'mongodb+srv://srajanacharya13:srajan123@cluster0.3j5e2le.mongodb.net/?retryWrites=true&w=majority',
//   file: (req, file) => {
//     if (file.mimetype === 'image/jpg') {
//       return {
//         bucketName: 'photos'
//       };
//     } else {
//       return null;
//     }
//   }
// });
// const upload = multer({ storage });
// module.exports = upload;
