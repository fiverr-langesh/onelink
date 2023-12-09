const express = require("express");
const {
  createLink,
  deleteAllLinks,
  deleteLink,
  updateLink,
  saveLink,
  setMainLink,
  customizeMainLink,
  getList,
  getRecentlyCreatedLink,
  deleteAllLists,
  deleteList,
} = require("./link.controller");

const router = express.Router();

router.get("/", getList);
router.get("/recently-created", getRecentlyCreatedLink);
router.post("/", createLink);
router.post("/save", saveLink);
router.post("/main", setMainLink);
router.put("/main/customize", customizeMainLink);
router.put("/:id", updateLink);
router.delete("/:id", deleteLink);
router.delete("/", deleteAllLinks);
router.delete("/li/all", deleteAllLists)
router.delete("/li/:id", deleteList);


module.exports = { LinkRouter: router };
