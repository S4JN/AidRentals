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

module.exports = { inventoryController }