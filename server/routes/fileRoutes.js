const router=require('express').Router()
const multer=require('multer')
const path=require('path')
// const File = require('../models/inventorySchema').file;
const {v4:uuid4}= require('uuid')
const {Inventory} = require('../models/inventorySchema');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  }
});

const upload = multer({ storage });

router.post('/add',upload.single('file'), async (req, res) => {
  // console.log(req.body);
  // res.send("hello");
  const { name,description, rentalPrice, life, isRented, tags,rating } = req.body;
  console.log(req.body);
  const {filename,path,uuid}=req.file;
  
  console.log("HI i am here");
  
  try {
    const newInventoryItem = new Inventory({
      name,
      // owner,
      file:{
        filename,
        path,
        uuid
      },
      description,
      rentalPrice,
      life,
      isRented,
      tags
    });
    await newInventoryItem.save();
    res.status(201).json({message: 'Form submitted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving inventory item to the database.');
  }
});

module.exports=router;