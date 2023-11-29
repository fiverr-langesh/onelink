const { Link } = require("../../models/link.model");

// GET /:mainUrlId - main link
async function mainLink(req, res) {
  try {
    const { mainUrlId } = req.params;

    console.log(mainUrlId);

    const link = await Link.findOne({ mainUrlId });

    console.log("link", link);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    const activeLinks = link.links.filter((link) => link.status === "Active");

    if (activeLinks.length === 0) {
      return res.redirect(link.fallbackUrl);
    }

    let index = Math.floor(Math.random() * activeLinks.length);

    if (link.mainUrl.type === "random") {
      index = Math.floor(Math.random() * activeLinks.length);
    } else {
      index = 0;
    }

    activeLinks[index].status = "Used";

    link.links = activeLinks;

    await link.save();

    res.redirect(link.links[index].url);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = { mainLink };
