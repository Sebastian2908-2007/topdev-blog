// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/db/config/connection";
import {BlogPost} from '../../db/models';

export default async function handler(req, res) {
  //console.log('IN ENDPOINT',req.body);
  try{ 
  await dbConnect();
  }catch(e) {
    console.log(e);
  }
  
  try{
    const myPost = await BlogPost.create(req.body);
    console.log(myPost);
  }catch(e) {

  }
  res.status(200).json({ name: 'John Doe' })
}
