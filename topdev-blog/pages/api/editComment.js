import dbConnect from "@/db/config/connection";
import {Comment} from "@/db/models";
export default async function editComment({body},res) {
        try{
            await dbConnect();
        }catch(e){
            console.log(e);
            res.status(500).json({message:"problem connecting to db"});
        }
        try{
           const updatedCmt = await Comment.findByIdAndUpdate(
            {_id: body.comment},
            {text: body.text}
            );
           res.status(200).json(updatedCmt); 
           console.log(updatedCmt,"UC");
        }catch(e){
            console.log(e);
            res.status(500).json({message:'internal server error comment'});
        }
}; 