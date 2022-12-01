const mongoose = require("mongoose")
const zaraSchema = mongoose.Schema({
    zara_dresstype: String,
    zara_color: {type:String,length:2},
    zara_price: {type:Number,min:5,max:30}
})
module.exports = mongoose.model("zara",zaraSchema)