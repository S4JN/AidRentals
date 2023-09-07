const { Inventory } = require("../models/inventorySchema");
const cloudinary = require("../config/cloudinary");

const inventoryController = async (req, res) => {
    const { image } = req.body; // Assuming images is an array of image data

    try {
        const uploadedImages = [];

        for (const i of image) {
            const result = await cloudinary.uploader.upload(i, {
                folder: "photos"
            });
            uploadedImages.push(result.secure_url);
        }

        const itemData = {
            ...req.body,
            image: uploadedImages
        };

        const item = new Inventory(itemData);
        await item.save();

        return res.status(201).send({
            success: true,
            message: "Item added",
            item
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "An error occurred"
        });
    }
};




// const getInventory = async (req, res) => {
//     try {
//         const inventories = await Inventory.find(); // Retrieve all inventories from the database
//         return res.status(200).send({
//             success: true,
//             message: "Inventories retrieved",
//             inventories
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error fetching inventories"
//         });
//     }
// };
const getInventory = async (req, res) => {
    try {
        // REQ PAGE FROM QUERY IF NOT PROVIDED THEN 1
        const page = parseInt(req.query.page) || 1;
        const itemsPerPage = 1;

        const totalItems = await Inventory.countDocuments();
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const inventories = await Inventory.find()
            .skip((page - 1) * itemsPerPage)
            .limit(itemsPerPage);

        return res.status(200).send({
            success: true,
            message: "Inventories retrieved",
            inventories,
            currentPage: page,
            totalPages
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error fetching inventories"
        });
    }
};


module.exports = { inventoryController, getInventory }


