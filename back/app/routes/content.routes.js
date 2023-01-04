module.exports = app => {
  const contents = require("../controllers/content.controller.js");

  var router = require("express").Router();

  // Create a new Content
  router.post("/", contents.create);

  // Retrieve all Contents
  router.get("/", contents.findAll);

  // Retrieve all published Contents
  router.get("/published", contents.findAllPublished);

  // Retrieve a single Content with id
  router.get("/:id", contents.findOne);

  // Update a Content with id
  router.put("/:id", contents.update);

  // Delete a Content with id
  router.delete("/:id", contents.delete);

  // Create a new Content
  router.delete("/", contents.deleteAll);

  app.use("/api/contents", router);
};