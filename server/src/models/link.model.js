const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: String,
    groupId: String,
    listName: String,
    links: [
      {
        url: String,
        date: String,
        status: { type: String, default: "Active" },
      },
    ],
    fallbackUrl: String,
    mainUrl: {
      value: String,
      type: { type: String, default: "lineal" },
    },
    mainUrlId: String,
  },
  {
    collection: "links",
  }
);

const Link = mongoose.model("Link", schema);

module.exports = { Link };
