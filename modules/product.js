const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = mongoose.Schema( {
    productid: String,
    name : String,
    category: [{
        type:String
    }]
});

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;