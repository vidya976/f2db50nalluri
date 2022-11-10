const mongoose = require("mongoose")
const zaraSchema = mongoose.Schema({
    zara_dresstype: String,
    zara_color: String,
    zara_price: Number
})
module.exports = mongoose.model("zara",
zaraSchema)