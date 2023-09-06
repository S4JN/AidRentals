const { Inventory } = require("../models/inventorySchema");

const inventoryController = async (req, res) => {
    try {

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


module.exports = { inventoryController, getInventory }


