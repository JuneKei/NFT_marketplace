const db = require("../models");
const Content = db.contents;

// Create and Save a new Content
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Content
  const content = new Content({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Content in the database
  content
    .save(content)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Content."
      });
    });
};

// Retrieve all Contents from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Content.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contents."
      });
    });
};

// Find a single Content with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Content.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Content with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Content with id=" + id });
    });
};

// Update a Content by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Content.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Content with id=${id}. Maybe Content was not found!`
        });
      } else res.send({ message: "Content was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Content with id=" + id
      });
    });
};

// Delete a Content with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Content.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Content with id=${id}. Maybe Content was not found!`
        });
      } else {
        res.send({
          message: "Content was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Content with id=" + id
      });
    });
};

// Delete all Contents from the database.
exports.deleteAll = (req, res) => {
  Content.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Contents were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contents."
      });
    });
};

// Find all published Contents
exports.findAllPublished = (req, res) => {
  Content.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contents."
      });
    });
};