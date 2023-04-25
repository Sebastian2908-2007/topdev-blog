import { useState } from "react";
import jwt from 'jsonwebtoken';
const Likes = ({postObj}) => {
  const [likeCnt, setLikeCnt] = useState(postObj.likes.length);
  const userToken = localStorage.getItem('user_token');
  const decodedToken = jwt.decode(userToken);
  

  const addLike = async (user,blogPost) => {
    
    if(decodedToken.exp < Date.now() / 1000) {
      alert('you must be logged in to leave a like on a post');
      return;
    }else{

    const response = await fetch('/api/addLike',{
     method:'POST',
     headers:{
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({user,blogPost})
    });

    if(response.ok) {
      const data = await response.json();
     if(data.DltFrmUi){
      setLikeCnt(likeCnt - 1);
      return;
     };
     setLikeCnt(likeCnt + 1);

    }else{
     console.log('something went wrong');
    };

  };
    
 };

return(
  <div>
    <button onClick={()=>
        !decodedToken ? alert('you must be logged in to leave a like')
        :
        addLike(decodedToken.id,postObj._id)}>
          like post
        </button>
    <span>{likeCnt}</span>
  </div>
);
};
export default Likes;