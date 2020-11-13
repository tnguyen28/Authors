const authorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.get("/api", authorController.index);
  app.post("/api/author/create", authorController.createAuthor);
  app.get("/api/author", authorController.getAllAuthors);
  app.get("/api/author/:id", authorController.getAuthor);
  app.put('/api/author/:id', authorController.updateAuthor);
  app.delete('/api/author/:id', authorController.deleteAuthor);
};
