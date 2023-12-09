const { Link } = require("../../models/link.model");
const { format } = require("date-fns");

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// GET /api/link - get all links
async function getList(req, res) {
  try {
    const links = await Link.find({ groupId: "default", userId: "default" });

    res.status(200).json(links);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// DELETE /api/link/li/:id - delete a list
async function deleteList(req, res) {
  try {
    const { id } = req.params;

    await Link.findByIdAndDelete(id);

    res.status(200).json({ message: "Link deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// DELETE /api/link/li/ - delete all lists
async function deleteAllLists(req, res) {
  try {
    await Link.deleteMany({});
    res.status(200).json({ message: "All links deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// GET /api/link/recently-created - get recently created link
async function getRecentlyCreatedLink(req, res) {
  try {
    const link = await Link.find({ groupId: "default", userId: "default" })
      .sort({ _id: -1 })
      .limit(1);

    res.status(200).json(link[0]);
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

    if (!groupId && !userId) {
      groupId = "default";
      userId = "default";
    }

    // find no of records with the groupId and userId
    const count = await Link.countDocuments({ groupId, userId });

    const createdLinks = await Link.create({
      links,
      listName: `List ${count + 1}`,
      groupId,
      userId,
      fallbackUrl,
    });

    return res.json(createdLinks);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// PUT /api/link/:id - update a link
async function updateLink(req, res) {
  try {
    const { id } = req.params;
    // const { url } = req.body;

    const date = format(new Date(), "dd-MM-yy");

    const link = await Link.findByIdAndUpdate(id, { ...req.body, date }, { new: true });

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

// POST /api/link/main - set main link
async function setMainLink(req, res) {
  try {
    const { type ,id} = req.body;

    // random 10 digit mainURLID
    const mainUrlId = Math.random().toString(36).substr(2, 10);

    const url = `http://${HOST}:${PORT}/${mainUrlId}`;

    const mainUrl = {
      value: url,
      type,
    };

    const link = await Link.findByIdAndUpdate(
      id,
      {
        mainUrlId,
        mainUrl,
      },
      { new: true }
    );

    res.status(200).json({ message: "Main link set", mainUrl });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// PUT /api/link/main/customize - customize main link
async function customizeMainLink(req, res) {
  try {
    const { value } = req.body;

    // check hostname or port or protocol have changed
    const url = new URL(value);

    if (url.hostname !== HOST || url.port !== PORT) {
      return res.status(400).json({ message: "Don't change hostname or port" });
    }

    const mainLinkId = value.split("/").pop();

    const isMainIdAlreadyTaken = await Link.findOne({ mainUrlId: mainLinkId });

    if (isMainIdAlreadyTaken) {
      return res.status(400).json({ message: "Main link ID already taken" });
    }

    const link = await Link.findOneAndUpdate(
      { groupId: "default", userId: "default" },
      {
        mainUrl: {
          value,
        },
        mainUrlId: mainLinkId,
      },
      { new: true }
    );

    res.status(200).json({ message: "Main link updated" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = {
  createLink,
  getList,
  saveLink,
  updateLink,
  deleteLink,
  deleteAllLinks,
  setMainLink,
  customizeMainLink,
  getRecentlyCreatedLink,
  deleteList,
  deleteAllLists
};
