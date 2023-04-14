import mongoose from "mongoose";
const {Schema, model} = mongoose;
const dayJS = require('dayjs');

const blogPostSchema = new Schema({
    postDate:{
        type: Date,
        default: Date.now,
        get: timeStamp => dayJS(timeStamp).format('M/DD/YYYY')
    },
    title:{
        type: String,
        required: true,
        trim: true 
    },
    html:{
        type: String,
        required: true,
        trim: true 
    },
});

const BlogPost = mongoose.models.BlogPost || model('BlogPost',blogPostSchema);

module.exports = BlogPost;