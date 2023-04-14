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
    const postData = await BlogPost.find();
    res.status(200).json(postData);
  }catch(e) {

  }
  
}
