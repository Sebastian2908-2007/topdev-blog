import { useState } from "react";
import jwt from 'jsonwebtoken';
const Likes = ({postObj}) => {
  const [likeCnt, setLikeCnt] = useState(postObj.likes.length);
  const userToken = localStorage.getItem('user_token');
  const decodedToken = jwt.decode(userToken);
  console.log(postObj.likes);

  const addLike = async (user,blogPost) => {
    const response = await fetch('/api/addLike',{
     method:'POST',
     headers:{
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({user,blogPost})
    });
    if(response.ok) {
     console.log(response.json());
     setLikeCnt(likeCnt + 1)

    }else{
     console.log('something went wrong');
    }
    
 };

return(
  <div>
    <button onClick={()=> addLike(decodedToken.id,postObj._id)}>like post</button>
    <span>{likeCnt}</span>
  </div>
);
};
export default Likes;