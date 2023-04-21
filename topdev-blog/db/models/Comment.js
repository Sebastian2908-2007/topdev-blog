import mongoose from 'mongoose';
const {Schema,model} = mongoose;
import dayJS from 'dayjs';

const commentSchema = new Schema({
    text:{
        type: String,
        trim: true,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now,
        get: timeStamp => dayJS(timeStamp).format('M/DD/YYYY')
    },
    blogPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'BlogPost'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Comment = mongoose.models.Comment || model('Comment', commentSchema);

module.exports = Comment;