const router=require('express').Router()
const multer=require('multer')
const path=require('path')
const File = require('../models/inventorySchema').file;
const {v4:uuid4}= require('uuid')
const InventoryModel = require('../models/inventorySchema');

const storage=multer.diskStorage({
    destination: (req,file,callBack)=> callBack(null,'uploads/'),
    filename:(req,file,callBack)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`
        callBack(null,uniqueName);
    },
})

const upload = multer({   
    storage: storage,  
}).array('files',5);   //max photos 5 limit set kri hai


 

router.post('/upload-image', upload, async (req, res) => {
  const { name, owner, description, rentalPrice, life, isRented, tags } = req.body;

  const files = req.files.map(file => ({
    filename: file.filename,
    path: file.path,
    originalName: file.originalname,
    uuid: uuid4()
  }));

  
  const newInventoryItem = new InventoryModel({
    name,
    owner,
    files,
    description,
    rentalPrice,
    life,
    isRented,
    tags
  });

  try {
    await newInventoryItem.save();
    res.status(201).json(newInventoryItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving inventory item to the database.');
  }
});