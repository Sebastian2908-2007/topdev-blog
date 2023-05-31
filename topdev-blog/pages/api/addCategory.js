import dbConnect from "@/db/config/connection";
import {Category} from '@/db/models';
export default async function addCategory ({body},res) {
   try{
   await dbConnect();
   }catch(e){
     res.status(500).json({message:'db error'});
     console.log(e);
   }

try {
const category = await Category.create(body);
res.status(200).json(category);
}catch(e){
    res.status(500).json({message:'internal server error'});
    console.log(e);
}

};