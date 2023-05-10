import dbConnect from "@/db/config/connection";
import { BlogPost,Like,Comment } from '@/db/models';

export default async function deleteBlogPost({body},res) {
    let postToDlt;
     try{
        await dbConnect();
     }catch(e){
        console.log(e);
        res.status(500).json({message:'db connection problem'});
     }

    try{
         postToDlt = await BlogPost.findOne({_id: body.blogPost});
        console.log(postToDlt);
    }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error blogpost find'});
    }

    try{
        const {likes} = postToDlt;
        if(likes.length) {
          const deletedLikes = await likes.forEach(like => {
            console.log(like,"like");
             Like.findOneAndDelete({_id:like});
             console.log('Like deleted');
           });
           console.log(deletedLikes,'Final Likes');
        }
    }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error like'})
    }

    try{
        const {comments} = postToDlt;
        if(comments.length) {
          const dltdComments = await comments.forEach(comment => {
                console.log('Comment',comment);
                Comment.findOneAndDelete({_id:comment});
                console.log('Comment deleted');
            });
            console.log(dltdComments,'Final Comments');
        }
    }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error comments'})
    }

     try{
      const dltdPost = await BlogPost.findOneAndDelete({_id: body.blogPost});
        console.log(dltdPost);
        res.status(200).json(dltdPost);
     }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error'});
     }
};