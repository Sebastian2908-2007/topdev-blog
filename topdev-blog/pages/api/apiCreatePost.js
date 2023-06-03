// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/db/config/connection";
import {BlogPost,Category} from '@/db/models';

export default async function handler({body}, res) {
 let category;
  try{ 
  await dbConnect();
  }catch(e) {
    console.log(e);
  };

  try{
    category = await Category.findOne({category: body.category});
    res.status(200).json(category);
  }catch(e){
    res.status(500).json({message:'problem with category'});
    console.log(e);
  };

  try{
    const myPost = await BlogPost.create({
      title:body.title,
      html:body.html,
      category: category._id,
      metaDescription: body.metaDescription,
      keywords: body.keywords
    });

    await Category.findOneAndUpdate(
      {_id: category._id},
      {$push: {blogPosts: myPost._id}}
      );

    res.status(200);
  }catch(e) {
res.status(500).json({message:'problem with blogpost'});
  };

};
