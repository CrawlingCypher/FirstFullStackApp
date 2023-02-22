const express = require("express");
const router = express.Router();
const storiesController = require("../controller/stories");

//view stories
router.get("/",  storiesController.getStories);


//get create story
router.get('/createStory', storiesController.getCreateStory)

//create story
router.post('/createStory', storiesController.createStory)

//view story
router.get("/:id",  storiesController.getStory);

//update story
router.put("/:id",  storiesController.updateStory);

//delete story
router.delete("/:id",  storiesController.deleteStory);

module.exports = router;