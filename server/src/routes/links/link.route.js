const express = require("express");
const {
  createLink,
  getLinks,
  deleteAllLinks,
  deleteLink,
  updateLink,
  saveLink,
  setMainLink,
  customizeMainLink,
} = require("./link.controller");

const router = express.Router();

router.get("/", getLinks);
router.post("/", createLink);
router.post("/save", saveLink);
router.post("/main", setMainLink);
router.put("/main/customize", customizeMainLink);
router.put("/:id", updateLink);
router.delete("/:id", deleteLink);
router.delete("/", deleteAllLinks);

module.exports = { LinkRouter: router };
