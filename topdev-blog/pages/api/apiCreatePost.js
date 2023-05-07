// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/db/config/connection";
import {BlogPost,Category} from '../../db/models';

export default async function handler({body}, res) {
  console.log('Body in route',body);
 let category;
  try{ 
  await dbConnect();
  }catch(e) {
    console.log(e);
  }
  try{
    category = await Category.findOne({category: body.category});
    console.log('C in Try',category);
    console.log('cat ID',category._id);
    res.status(200).json(category);
  }catch(e){
    res.status(500).json({message:'problem with category'});
    console.log(e);
  }
  try{
    const myPost = await BlogPost.create({title:body.title,html:body.html,category: category._id});
    console.log(myPost);
  }catch(e) {
res.status(500).json({message:'problem with blogpost'});
  }
}
