const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    filename:{type:String , required:true},
    path:{ type:String , required:true},
    uuid:{ type:String, required:true}
},{timestamps:true})

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    file:[fileSchema],
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
    rating: { type: String, enum: ["1", "2", "3", "4","5"], default: '3' },

});


const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = { Inventory };
