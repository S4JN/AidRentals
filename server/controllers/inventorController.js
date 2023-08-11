const { Inventory } = require("../models/inventorySchema");
const upload = require("../config/gridFsStorage");

const inventoryController = async (req, res) => {
  try {
    // Upload the images to GridFS and get their filenames
    await upload.array('images')(req, res, async function (err) {
        console.log(req)
      if (err) {
        console.error(err);
        return res.status(500).send({
          success: false,
          message: "Error uploading images",
        });
      }

      // Get the image filenames from the request object
      // here change is required
      const imageFilenames = req.file;
      
      // Create the inventory item with the image filenames
      const item = new Inventory({
        ...req.body,
        images: imageFilenames,
      });

      // Save the inventory item to the database
      await item.save();

      return res.status(201).send({
        success: true,
        message: "Item added",
        item
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error saving the item",
    });
  }
};

module.exports = { inventoryController };
