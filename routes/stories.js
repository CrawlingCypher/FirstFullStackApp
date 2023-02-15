const express = require("express");
const router = express.Router();
const storiesController = require("../controller/stories");


router.get("/",  storiesController.getStories);
router.get("/:id",  storiesController.getStory);
router.put("/:id",  storiesController.updateStory);

module.exports = router;