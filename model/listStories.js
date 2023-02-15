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
    
    author: { 
        type: String,
        enum: ['action','adventure','horror']
    },
    
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Story", StorySchema);