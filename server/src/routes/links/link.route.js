const express = require("express");
const {
  createLink,
  getLinks,
  deleteAllLinks,
  deleteLink,
  updateLink,
  saveLink,
} = require("./link.controller");

const router = express.Router();

router.get("/", getLinks);
router.post("/", createLink);
router.post("/save", saveLink);
router.put("/:id", updateLink);
router.delete("/:id", deleteLink);
router.delete("/", deleteAllLinks);

module.exports = { LinkRouter: router };
