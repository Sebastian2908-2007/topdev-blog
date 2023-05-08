import dbConnect from "@/db/config/connection";
import { Category } from '@/db/models';

export default async function deleteCategory({body},res) {
    try{
        await dbConnect();
    }catch(e){
        console.log(e);
        res.status(500).json({message:'problem with db connection'});
    };
    try{
       const deletedCategory = await Category.findOneAndDelete({_id: body.category});
       res.status(200).json(deletedCategory);
    }catch(e){
        console.log(e);
        res.status(500).json({message:'internal server error'});
    }
};