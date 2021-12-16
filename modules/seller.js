const mongoose = require("mongoose");
mongoose.pluralize(null);

const sellerSchema = mongoose.Schema( {
    sellerid: String,
    name : String,
    productids: [{
        type:String
    }]
});

const sellerModel = mongoose.model("seller",sellerSchema);

module.exports = sellerModel;