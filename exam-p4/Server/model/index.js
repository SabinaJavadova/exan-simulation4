const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchSchema = new Schema({
  img: String, // String is shorthand for {type: String}
  name: String,
  price: Number,
});

const watchModel = mongoose.model("watch", watchSchema);

module.exports = watchModel;
