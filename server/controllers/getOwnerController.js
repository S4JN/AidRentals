const userModel = require("../models/userSchema");


const getOwnerDetails = async (req, res) => {

    try {
        const id = req.body;
        const { data } = await userModel.find({ _id: id });
        console.log(data);
        return res.status(200).send({
            success: true,
            message: "owner retrived",
            data
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in fetching owner",
            error
        });
    }


}

module.exports = getOwnerDetails