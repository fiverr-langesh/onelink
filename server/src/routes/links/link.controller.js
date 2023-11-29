const { Link } = require("../../models/link.model");
const { format } = require("date-fns");

// GET /api/link - get all links
async function getLinks(req, res) { 
  try {
    const links = await Link.findOne({ groupId: "default", userId: "default" });

    res.status(200).json(links);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// POST /api/link - create a new link
async function createLink(req, res) {
  try {
    const { url } = req.body;

    const date = format(new Date(), "dd-MM-yy");

    const link = await Link.create({ url, date });

    res.status(201).json(link);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// POST /api/link/save - create multiple links
async function saveLink(req, res) {
  try {
    let { links, groupId, userId, fallbackUrl } = req.body;

    console.log(fallbackUrl)

    if (!groupId && !userId) {
      groupId = "default";
      userId = "default";
    }

    const group = await Link.findOne({ groupId, userId });

    if (!group) {
      const createdLinks = await Link.create({
        links,
        groupId,
        userId,
        fallbackUrl,
      });

      return res.json(createdLinks);
    } else {
      const createdLinks = await Link.findOneAndUpdate(
        { groupId, userId },
        { links, fallbackUrl },
        { new: true }
      );

      return res.json(createdLinks);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// PUT /api/link/:id - update a link
async function updateLink(req, res) {
  try {
    const { id } = req.params;
    const { url } = req.body;

    const date = format(new Date(), "dd-MM-yy");

    const link = await Link.findByIdAndUpdate(id, { url, date }, { new: true });

    res.status(200).json(link);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// DELETE /api/link/:id - delete a link
async function deleteLink(req, res) {
  try {
    const { id } = req.params;

    await Link.findByIdAndDelete(id);

    res.status(200).json({ message: "Link deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// DELETE /api/link/ - delete all links
async function deleteAllLinks(req, res) {
  try {
    await Link.deleteMany({});

    res.status(200).json({ message: "All links deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = {
  createLink,
  getLinks,
  saveLink,
  updateLink,
  deleteLink,
  deleteAllLinks,
};
