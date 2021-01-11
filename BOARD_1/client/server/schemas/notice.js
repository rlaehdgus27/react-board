const mongoose = require("mongoose");

const { Schema } = mongoose;
const noticeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notice", noticeSchema);
