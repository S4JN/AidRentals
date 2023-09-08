const express = require('express');
const multer = require('multer');
import {GridFsStorage} from 'multer-gridfs-storage'
const app = express();
require("dotenv").config();
// // Configure Multer for handling multiple file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/') // Specify the directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname) // Use the original filename
//   }
// });

// const upload = multer({ storage: storage });

// // Handle file upload
// module.exports=upload;

export function gridStorage(){
  let storageFs=new GridFsStorage({
    url:process.env.MONGO_URL,
    file:(req,file)=>{
      return {
        filename:
      }
    }
  })
}

