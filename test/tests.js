var assert = require("chai").assert;

var parseCreatedBy = require("../");

var fixtures = [
  ["uTorrent/2210", {client: "uTorrent", version: "2210"}],
];

describe("parseCreatedBy", function() {
  fixtures.forEach(function(fixture) {
    it("should parse " + fixture[0] + " into " + JSON.stringify(fixture[1]), function() {
      var res = parseCreatedBy(fixture[0]);

      assert.deepEqual(res, fixture[1]);
    });
  });
});
