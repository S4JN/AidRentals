const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    rentalPrice: {
        type: String,
        required: true
    },
    life:{
        type: String,
    },
    isRented: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String,
        required: true
    }],

});


const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = { Inventory };
