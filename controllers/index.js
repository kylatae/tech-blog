//Needs express
const router = require ("express").Router();

//Sets up route paths for file location
const userAPIRoutes = require("./api/user.api.routes");
const blogAPIRoutes = require("./api/blog.api.routes");
const displayRoutes = require("./handlebars/display.handlebars.routes");

//Sets up route paths for use on site
router.use ("/api/user", userAPIRoutes);
router.use ("/api/blog", blogAPIRoutes);
router.use("/", displayRoutes);

//Creates a catch-all route "404" page for anything not found
router.get('*', (req, res) =>{
  res.render('404');
});

//Exports module to be used elsewhere
module.exports = router;