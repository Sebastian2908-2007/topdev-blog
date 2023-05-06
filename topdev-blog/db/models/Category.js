import mongoose from "mongoose";

const {model, Schema} = mongoose;

const categorySchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true,
        unique: true 
    },
    blogPosts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
    }],
});

const Category = mongoose.models.Category || model('Category', categorySchema);

module.exports = Category;