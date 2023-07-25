const inventoryController = (req, res) => {
    res.status(200).send({
        message: "test route",
        success: true,
    });
};

module.exports = { inventoryController }