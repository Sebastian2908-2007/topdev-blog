import dbConnect from "@/db/config/connection";
import {Like,BlogPost} from '@/db/models';

export default async function addLike({body},res) {
    console.log('Data in route',body);
    let like;
    try{
        await dbConnect();
    }catch(e){
        console.log(e);
        res.status(500).json({message:'Error with database'});
    };

    try{
        like = await Like.create({user:body.user});
    }catch(e){
       console.log(e);
       res.status(500).json({massage:'error with like'}); 
    }

    try{
        const updatedPost = await BlogPost.findByIdAndUpdate(
            {_id: body.blogPost},
            {$push: {likes: like}},
            {new: true}
            
            ).populate('likes');
        res.status(200).json(updatedPost)
    }catch(e){
        console.log(e);
        res.status(500).json({message:'error with blogpost'});
    }
}