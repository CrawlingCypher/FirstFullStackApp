const Stories = require("../model/listStories");

module.exports = {


    //render list of storys
    getStories: async (req, res) => {
        const stories = await Stories.find({});
        console.log(stories)
        res.render('viewStories', {stories});
    },


    //render the specific story page
    getStory: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        const story = await Stories.findById(id);
        console.log(story)
        res.render('viewStory', { story });
    },

    //updating the description of the story
    updateStory: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        const story = await Stories.findByIdAndUpdate(id, {...req.body.story}, {new: true})
        console.log(req.body.story)
        res.render('viewStory', {story})


    },

    //render the creation of storys page
    createStories:  (req, res) => {
        res.render('createStories');
    }

    
}

