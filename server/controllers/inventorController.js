const { Inventory } = require("../models/inventorySchema");
const cloudinary = require("../config/cloudinary");

const inventoryController = async (req, res) => {




    const { image } = req.body;


    try {

        // this below line of code is giving me the link
        //run a loop
        const result = await cloudinary.uploader.upload(image,{
            folder: "photos"
        })

        req.body.image= result.secure_url;

        const item = new Inventory(req.body);
        await item.save();
        return res.status(201).send({
            success: true,
            message: "Item added",
            item
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "idhr error"
        });
    }
};



const getInventory = async (req, res) => {
    try {
        const inventories = await Inventory.find(); // Retrieve all inventories from the database
        return res.status(200).send({
            success: true,
            message: "Inventories retrieved",
            inventories
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error fetching inventories"
        });
    }
};
// const getInventory = async (req, res) => {
//     try {
//       const page = parseInt(req.query.page) || 1; // Get the requested page from query parameters
//       const itemsPerPage = 3;

//       const totalItems = await Inventory.countDocuments();
//       const totalPages = Math.ceil(totalItems / itemsPerPage);

//       const inventories = await Inventory.find()
//         .skip((page - 1) * itemsPerPage)
//         .limit(itemsPerPage);

//       return res.status(200).send({
//         success: true,
//         message: "Inventories retrieved",
//         inventories,
//         currentPage: page,
//         totalPages
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error fetching inventories"
//       });
//     }
//   };


module.exports = { inventoryController, getInventory }


