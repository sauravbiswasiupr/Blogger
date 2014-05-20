"use strict";

var Blog = require("./models/todo");

module.exports = function(app) {
  app.get("/api/blogs", function(req, res) {
    Blog.find(function(err, blogs) {
      if (err)
        res.send(err);
      res.json(blogs);
    });
  });

  app.post("/api/blogs", function(req, res) {
    Blog.create({
      text : req.body.text,
      done : false
    }, function(err, blog) {
      if (err)
        res.send(err);

      Blog.find(function(err, blogs) {
        if (err)
          res.send(err);

        res.json(blogs);
      });
    });
  });

  app.delete("/api/blogs/:blog_id", function(req, res) {
    Blog.remove({
      _id: req.params.blog_id
    }, function(err, blog) {
      if (err)
        res.send(err);

      Blog.find(function(err, blogs) {
        if (err)
          res.send(err);

        res.json(blogs);
      });
    });
  });

  app.get("*", function(req, res) {
    res.sendfile("./public/index.html");
  });
};
