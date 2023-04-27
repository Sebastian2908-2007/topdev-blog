import dbConnect from '@/db/config/connection';
import {Comment,BlogPost} from '@/db/models';

export default async function deleteComment({body},res) {
    console.log(body,"incoming body");

    try{
     await dbConnect();
    }
    catch(e) {
        console.log(e);
        res.status(500).json({message: 'problem connectiong to the database'});
    }

    try{
      const updatedBlogPost = await BlogPost.findByIdAndUpdate(
        {_id:body.blogPost},
        {$pull: {comments:body.comment}},
        {new: true}
      );
      console.log('UBP',updatedBlogPost);
    }catch(e){
        console.log(e);
        res.staus(500).json({message:'internal server error BP'});
    }

    try{
     const deletedComment = await Comment.findOneAndDelete({_id: body.comment});
     console.log('DC',deletedComment);
     res.status(200).json(deletedComment);
    }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error Comment'});
    }
};