const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: [2, "name must be at least 3 characters long"],
    },
  },
  { timestamps: true }
);

function validate(string) {}

module.exports.Author = mongoose.model("Author", AuthorSchema);
