const express = require("express");
const blogRoutes = express.Router();
const blogController = require("../controllers/blogController")


blogRoutes.get('/read_by_category',blogController.ReadbyCategory);
blogRoutes.post('/read_by_user',blogController.ReadbyUser);
blogRoutes.post('/compose',blogController.Compose);
blogRoutes.delete('/delete_blog',blogController.Delete);


module.exports = blogRoutes;