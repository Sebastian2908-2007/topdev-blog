import dbConnect from "@/db/config/connection";
import {User} from '../../db/models';

export default async function getAllUsers(req,res) {
  try{
    await dbConnect();
  }catch(e) {
    console.log(e);
    res.status(500).json({message: 'error conecting to the database'});
  }
  try{
    const users = await User.find();
    res.status(200).json(users);
  }catch(e){
    console.log(e);
    res.staus(500).json({message:'internal server error'});
  }
};