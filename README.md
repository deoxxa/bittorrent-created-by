bittorrent-created-by [![build status](https://travis-ci.org/deoxxa/bittorrent-created-by.png)](https://travis-ci.org/deoxxa/bittorrent-created-by)
=====================

Parse bittorrent "created by" strings into objects or die trying!

Overview
--------

bittorrent-created-by tries really hard to parse the ugly and often confusing
"created by" fields from torrent files. The definitions it uses were built by
analysing a very large collection of torrent files found in the wild.

Super Quickstart
----------------

Code:

```javascript
var parseCreatedBy = require("bittorrent-created-by");

var createdBy = parseCreatedBy("uTorrent/2210");

console.log(JSON.stringify(createdBy));
```

Output:

```
{"client":"uTorrent","version":"2210"}
```

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install bittorrent-created-by

Or via git:

> $ git clone git://github.com/deoxxa/bittorrent-created-by.git node_modules/bittorrent-created-by

API
---

**parseCreatedBy**

This is the only thing exposed by this module.

```javascript
parseCreatedBy(string);
```

```javascript
var createdBy = parseCreatedBy("uTorrent/2210");
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
