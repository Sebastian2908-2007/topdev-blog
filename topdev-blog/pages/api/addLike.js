import dbConnect from "@/db/config/connection";
import {Like,BlogPost} from '@/db/models';

export default async function addLike({body},res) {
let likeToRemove;
let newLike;
    try{
        await dbConnect();
    }catch(e){
        console.log(e);
        res.status(500).json({message:'Error with database'});
    };
    const blogPost = await BlogPost.findOne({_id: body.blogPost}).populate('likes').populate('likes.user');

    const userHasLiked = () => {
        const likes =  blogPost.likes;
        let needToRemove;
         if(likes.length) {
        likes.forEach(like => {
            if(like.user.toHexString() === body.user) {
                likeToRemove = like._id;
                needToRemove = true;
            }else{
                needToRemove = false;
            };  
             });
             return needToRemove;
        }else{
            return;
        };  
    };
     
   
    if(userHasLiked()) {
        const updatedPost = await BlogPost.findByIdAndUpdate(
            {_id:body.blogPost},
            {$pull: {likes: likeToRemove}},
            {new: true}
            ).populate('likes');
        await Like.findOneAndDelete({_id: likeToRemove.toHexString()});
        res.status(200).json({DltFrmUi:true});
        return;
    };
     

    try{
        newLike = await Like.create({user:body.user});
    }catch(e){
       console.log(e);
       res.status(500).json({message:'error with like'}); 
    };

    try{
        const updatedPost = await BlogPost.findByIdAndUpdate(
            {_id: body.blogPost},
            {$push: {likes: newLike}},
            {new: true}
            
            ).populate('likes');
        res.status(200).json(updatedPost);
    }catch(e){
        console.log(e);
        res.status(500).json({message:'error with blogpost'});
    };
};