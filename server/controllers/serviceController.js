const cloudinary = require("../config/cloudinary");
const { Service } = require("../models/serviceSchema");

const addService = async (req, res) => {
    try {
        const existing = await Service.findOne({ email: req.body.email });
        //array
        let pic = req.body.pic;

        if(pic[0]){
            const result = await cloudinary.uploader.upload(pic[0], {
                folder: "photos"
            });

            pic = result.secure_url;
        }
        if (existing) {
            return res.status(200).send({
                success: false,
                message: "Service Already Exists"
            });
        }

        const newService = await Service.create({
            name: req.body.name,
            bio: req.body.bio,
            price: req.body.price,
            age: req.body.age,
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

const getAllService = async (req, res) => {
    try {
        // REQ PAGE FROM QUERY IF NOT PROVIDED THEN 1
        const page = parseInt(req.query.page) || 1;
        const itemsPerPage = 3;

        const totalItems = await Service.countDocuments();
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const services = await Service.find()
            .skip((page - 1) * itemsPerPage)
            .limit(itemsPerPage);

        return res.status(200).send({
            success: true,
            message: "Service retrieved",
            services,
            currentPage: page,
            totalPages
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error fetching Services"
        });
    }
}


const getService = async (req, res) => {
    try {
        const { name, specialty, city } = req.query;
        // http://localhost:8000/api/v1/service/get-service?name=John&specialty=Dentist&city=New%20York
        const query = {};

        if (name) {
            query.name = { $regex: new RegExp(name, "i") };
        }

        if (specialty) {
            query.specialty = { $regex: new RegExp(specialty, "i") };
        }

        if (city) {
            query.city = { $regex: new RegExp(city, "i") };
        }

        const services = await Service.find(query);

        res.status(200).send({
            success: true,
            message: "Services retrieved successfully",
            data: services
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};


module.exports = { addService, getAllService, getService };
