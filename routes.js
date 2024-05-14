const UAParser = require("ua-parser-js");
const config = require("./config");

exports.handleRedirect = (req, res) => {
  const linkId = req.params.linkId;
  const links = config.links[linkId];

  if (!links) {
    return res.status(404).send("Link not found");
  }

  const ua = UAParser(req.headers["user-agent"]);
  const deviceType = ua.device.type;

  if (deviceType === "mobile") {
    if (ua.os.name === "Android") {
      return res.redirect(links.android);
    } else if (ua.os.name === "iOS") {
      return res.redirect(links.ios);
    }
  }

  return res.redirect(links.desktop);
};
