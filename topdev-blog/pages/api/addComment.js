import dbConnect from "@/db/config/connection";
import mongoose from "mongoose";
// create comment giving it the user _id and the blogpost _id
// then push the comment to the blogpost, find it by _is and update
import {Comment,BlogPost} from '@/db/models';

export default async function addComment ({body},res) {
    console.log(body);
    try{
    dbConnect();
    }catch(e) {
        console.log(e);
        res.status(500).json({message:'Error connecting to the database'});
    }
    let  comment;
    if(!body) {
       res.status(500).json({message: 'Internal server error with Comment'}); 
    }
    try {
    comment = await Comment.create(body);
    }catch(e) {
        console.log(e);
        res.status(500).json({message: 'Internal server error'});
    }

    try {
   const updatedPost = await BlogPost.findByIdAndUpdate(
    {_id: body.blogPost},
    {$push: {comments: comment}},
    {new: true}
   ).populate('comments');

   console.log(updatedPost);

   res.status(200).json(updatedPost);
    }
    catch(e){
        console.log(e);
        res.status(500).json({message: 'Internal Server Error with blogpost'})
    }
   
}