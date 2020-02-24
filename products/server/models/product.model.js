const mongoose = require('mongoose');
    uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({

    "productTitle" : {
        type: String,
        required: [true, "Enter the product name"],
        minlength: [3, "Minimum title length: 3 characters"],
        unique: [true, "That product already exists."]
    },
    "productPrice" : {
        type: Number,
        required: [true, "Enter a price for the product"],
        min: [1, "Enter a price for the product"]
    },
    "productDescription" : {
        type: String,
        required: [true, "Describe the product"],
        minlength: [3, "Enter a description of at least 3 characters"],
        maxlength: [50, "Please provide a shorted description."]
    }

}, {timestamps : true});

// need to npm install mongoose-unique-validator to use this
ProductSchema.plugin(uniqueValidator);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;