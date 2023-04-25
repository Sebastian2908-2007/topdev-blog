import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const likeSchema = new Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
});

const Like = mongoose.models.Like || model('Like', likeSchema);

module.exports = Like;