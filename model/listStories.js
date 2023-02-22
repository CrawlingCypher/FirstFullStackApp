const mongoose = require("mongoose");
const {Schema} = mongoose;

const StorySchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    
    category: { 
        type: String,
        enum: ['action','adventure','horror']
    },
    
});

//MongoDB Collection named here - will give lowercase plural of name 
const Stories = mongoose.model("Story", StorySchema);

module.exports = Stories;