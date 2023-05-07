import dbConnect from "@/db/config/connection";
import { Category } from '@/db/models';

export default async function getCategories(req,res) {
  try{
    await dbConnect();
  }catch(e){
    res.status(500).json({message: 'problem connecting to db'});
    console.log(e);
  };
  try{
  const categories = await Category.find();
  res.status(200).json(categories);
  }catch(e){
    res.status(500).json({mesage: 'internal server error'});
    console.log(e);
  };
};