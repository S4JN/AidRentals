const cloudinary = require("../config/cloudinary");
const { Service } = require("../models/serviceSchema");

const addService = async (req, res) => {
    try {
        const existing = await Service.findOne({ email: req.body.email });

        let pic = req.body.pic;

        const result = await cloudinary.uploader.upload(pic, {
            folder: "photos"
        });

        pic = result.secure_url;

        if (existing) {
            return res.status(200).send({
                success: false,
                message: "Service Already Exists"
            });
        }

        const newService = await Service.create({
            name: req.body.name,
            bio: req.body.bio,
            gender: req.body.gender,
            pic: pic, 
            phoneNumber: req.body.phoneNumber,
            yoe: req.body.yoe,
            specialty: req.body.specialty,
            email: req.body.email,
            city: req.body.city,
            preferredAreas: req.body.preferredAreas,
            reviews: req.body.reviews,
            workingHours: req.body.workingHours
        });

        res.status(201).send({
            success: true,
            message: "Service added successfully",
            data: newService
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { addService };
