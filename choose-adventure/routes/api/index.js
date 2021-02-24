const router = require("express").Router();
const userRoutes = require("./users");

// story routes
router.use("/users", userRoutes);

module.exports = router;
