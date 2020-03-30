const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: String,
    name: String,
    facebookId: String,
    picture: {
      type: String,
      default: "https://via.placeholder.com/300"
    },
    aboutme: String,
    following: [{ type: Schema.Types.ObjectId }],
    followers: [{ type: Schema.Types.ObjectId }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
