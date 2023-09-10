const mongoose = require("mongoose");


const serviceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    bio: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    pic: {
        type: String,
        required: true
    },
    phoneNumber: [{
        type: String,
        required: true
    }],
    yoe:{
        type: String,
        required: true
    },
    specialty:[{
        type: String,
        required: true,
    }],
    email:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required: true
    },
    preferredAreas: [{
        type: String
    }],
    reviews: [{
        type: String
    }],
    workingHours: {
        type: String
    }  
  },
    { timestamps: true }
  );
  
  const Service = mongoose.model('Service', serviceSchema);
  
  module.exports = { Service };