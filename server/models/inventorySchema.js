// const mongoose = require('mongoose');




// const inventorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
    
//     description: {
//         type: String,
//         required: true
//     },
//     rentalPrice: {
//         type: String,
//         required: true
//     },
//     life: {
//         type: String,
//     },
//     isRented: {
//         type: Boolean,
//         default: false
//     },
//     tags: [{
//         type: String,
//         required: true
//     }],
//     rating: { type: String, enum: ["1", "2", "3", "4", "5"], default: '3' },

// });


// const Inventory = mongoose.model('Inventory', inventorySchema);

// module.exports = { Inventory };


const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  rentalPrice: {
    type: String,
    required: true,
  },
  life: {
    type: String,
  },
  isRented: {
    type: Boolean,
    default: false,
  },
  tags: [{
    type: String,
    required: true,
  }],
  rating: { type: String, enum: ["1", "2", "3", "4", "5"], default: '3' },
<<<<<<< HEAD
  images: [{ type: String }], 
=======
  images: [{ type: String }], // Add a new field to store image filenames
>>>>>>> ad79c41ef07377f383954f774b5bd615409ca00f
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = { Inventory };
