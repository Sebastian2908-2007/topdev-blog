import dbConnect from "@/db/config/connection";
import { BlogPost,Like,Comment,Category } from '@/db/models';

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
        return res.status(500).json({message:'internal server error blogpost find'});
    }

    try {
    const updated_category = await Category.findOneAndUpdate(
        {_id: postToDlt.category},
         {$pull:{blogPosts:postToDlt._id}},
         {new: true}
         );
         console.log('Updated category',updated_category)

    }catch(e){
        console.log(e);
      return  res.status(500).json({message:'problem removing blogpost from category'});
    }

    try{
        const {likes} = postToDlt;
        if(likes.length) {
           await likes.forEach(like => {
             Like.findOneAndDelete({_id:like});
           });
        }
    }catch(e){
        console.log(e);
       return res.status(500).json({message:'internal server error like'})
    }

    try{
        const {comments} = postToDlt;
        if(comments.length) {
           await comments.forEach(comment => {
               
                Comment.findOneAndDelete({_id:comment});
                
            });
            
        }
    }catch(e){
        console.log(e);
       return res.status(500).json({message:'internal server error comments'})
    }

     try{
      const dltdPost = await BlogPost.findOneAndDelete({_id: body.blogPost});
        console.log(dltdPost);
        res.status(200).json(dltdPost);
     }catch(e){
        console.log(e);
       return res.status(500).json({message:'internal server error'});
     }
};