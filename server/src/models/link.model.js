const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: String,
    groupId: String,
    links: [
      {
        url: String,
        date: String,
        status: { type: String, default: "active" },
      },
    ],
    fallbackUrl: String,
    mainUrl: {
      value: String,
      type: { type: String, default: "linear" },
    },
  },
  {
    collection: "links",
  }
);

const Link = mongoose.model("Link", schema);

module.exports = { Link };
