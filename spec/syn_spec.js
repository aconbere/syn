var assert = require("assert");
var sys = require("sys");
var fs = require("fs");

var minitest = require("../vendor/minitest.js/minitest");
var syn = require("../lib/syn");

minitest.setupListeners();

minitest.context("syn.track", function () {
  this.assertion("it should call \"started\" when called", function (test) {
    var e = syn.track(fs.stat, ["/"], function (err, stat) {});

    e.addListener("started", function () {
      sys.p("started");
      assert.ok(true);
      test.finished();
    });

    assert.ok(false);
  });

  this.assertion("it should call \"finished\" when done", function (test) {
    var e = syn.track(fs.stat, ["/"], function (err, stat) {});

    e.addListener("finished", function () {
      assert.ok(true);
      test.finished();
    });

    assert.ok(false);
  });
});
