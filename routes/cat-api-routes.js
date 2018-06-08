// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // res.render("../views/index.handlebars",null);

    // .then(function(data) {
      // res.render("../views/index.handlebars",data);
    // });
  });
  app.get("/", function(req, res) {
    console.log(db.Cat);
    db.Cat.findAll({})
    .then(function(data) {
      res.render("../views/index.handlebars",data);
    });
  });
//
//
  // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   // 2. Add a join here to include the Author who wrote the Post
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Author]
  //   }).then(function(dbPost) {
  //     console.log(dbPost);
  //     res.json(dbPost);
  //   });
  // });

  // // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   db.Post.create(req.body).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
};
