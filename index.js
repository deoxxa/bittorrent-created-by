// these clients have a sane format for their "created by" strings
var saneStrings = [
  "Azureus", "Azureus Bit Tyrant", "BitComet", "BitLet", "BitLord",
  "BitSpirit", "BitTorrent", "buildtorrent", "BurnBit", "Enhanced-CTorrent",
  "Flush", "Halite", "KTorrent", "mktorrent", "py3createtorrent",
  "qBittorrent", "Tixati", "TorrentAid", "TorrentB", "TorrentSpy",
  "Transmission", "uTorrent", "VIP Torrent",
].sort(function(a, b) {
  return b.length - a.length;
});

// woooooooo regex
var saneRegex = new RegExp([
  "^(",
  saneStrings.map(function(s) {
    return s.replace(/([\(\)\/\[\]])/g, "\\$1");
  }).join("|"),
  ")(?:/| v | v| )?(.*?)$",
].join(""));

/**
 * Parses the "created by" key of the info dictionary into a handy object like
 * this:
 *
 * {
 *   client: "MyTorrent",
 *   version: "1.11"
 * }
 *
 * Use it like so:
 *
 * parseCreatedBy("MyTorrent/1.11")
 *
 * Returns null if it can't parse the string.
 */
var parseCreatedBy = module.exports = function parseCreatedBy(createdBy) {
  if (typeof createdBy !== "string") {
    return null;
  }

  // seriously?
  if (matches = createdBy.match(/^mktorrent-GUI \[mktorrent (.+?)\]$/)) {
    return {
      client: "mktorrent (via mktorrent-GUI)",
      version: matches[1],
    };
  }

  // yep. that's all we get.
  if (matches = createdBy.match(/^ruTorrent \(PHP Class - Adrien Gibrat\)$/)) {
    return {
      client: "ruTorrent",
      version: null,
    };
  }

  // we're going to want to know what other strings there are like this
  if (createdBy === "1.9.6.1073cn") {
    return {
      client: "Flashget",
      version: "1.9.6.1073cn",
    };
  }

  // these are the "sane" torrent clients
  if (matches = saneRegex.exec(createdBy)) {
    return {
      client: matches[1],
      version: matches[2],
    };
  }

  // this is us giving up
  return null;
};
