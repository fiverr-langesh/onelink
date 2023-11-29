const { Link } = require("../../models/link.model");

// GET /:mainUrlId - main link
async function mainLink(req, res) {
  try {
    // console.log(req.url)
    const { mainUrlId } = req.params;

    const link = await Link.findOne({ mainUrlId });
    // console.log('fetched link',link)

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    const activeLinks = link.links.filter((link) => link.status === "Active");
    const usedLinks = link.links.filter((link) => link.status === "Used");

    // console.log("active",activeLinks)

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

    link.links = [...activeLinks, ...usedLinks];

    // console.log("selectedLink", activeLinks[index].url);

    // console.log('links',link.links)

    await link.save();

    return res.redirect(activeLinks[index].url);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = { mainLink };
