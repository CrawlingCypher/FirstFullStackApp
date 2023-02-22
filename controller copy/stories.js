const Stories = require("../model/listStories");

module.exports = {


    //render list of storys
    getStories: async (req, res) => {
        const stories = await Stories.find({});
        // console.log(stories)
        res.render('viewStories', {stories});
    },


    //render the specific story page
    getStory: async (req, res) => {
        const { id } = req.params;
        // console.log(id);
        const story = await Stories.findById(id);
        // console.log(story)
        res.render('viewStory', { story });
    },

    //get create story page
    getCreateStory:  (req, res) => {
        res.render('createStory')
        },

    //get create story page
    createStory:  async (req, res) => {
        let data = req.body;
        // console.log(data)
        await Stories.collection.insertOne({title: data.title, author: data.author, catergory: data.catergory, description: data.description})
        const stories = await Stories.find({});
        res.render('viewStories' , {stories})
        },




    //updating the description of the story
    updateStory: async (req, res) => {
        const { id } = req.params;
        //req.body.story is destructuring the name of the input story[description]
        const story = await Stories.findByIdAndUpdate(id, {...req.body.story}, {new: true})
        console.log(story)
        res.render('viewStory', {story})

    },

    //deleting the whole story
    deleteStory: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        await Stories.findByIdAndDelete(id)
        const stories = await Stories.find({});
        console.log(req.body.story)
        res.render('viewStories', {stories})


    },

    //render the creation of storys page
    createStories:  (req, res) => {
        res.render('createStories');
    }

    
}

