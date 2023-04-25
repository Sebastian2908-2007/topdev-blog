import { useState } from 'react';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

const Comments = ({postObj}) => {
   
    const comments = postObj.comments;
    const [userComment,setUserComment] = useState([]);
    const [openCommentForm,setOpenCommentForm] = useState(false);
    const [text, setText] = useState()
    const isLoggedIn = cookie.get('isLoggedIn');

const commentFormHandler = () => {
    if(isLoggedIn) {
        setOpenCommentForm(true);
    }else{
        alert('you must login to leave comments');
    };
};

const submitComment = async () => {
    const blogPost = postObj._id;
    const user_token = localStorage.getItem('user_token');
    const decodedToken = jwt.decode(user_token);
    const user = decodedToken.id;
    setOpenCommentForm(false);
  const response = await fetch('/api/addComment',{
    method:'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({text,blogPost,user}),
  });
  const commentData = await response.json();
  setUserComment([...userComment, {text: commentData.text, date: commentData.date}]);
};

const handleChange = (event) => {
    const {value} = event.target;
    setText(
        
        value
    );

};

    return(
        <>
        <h4>Comments</h4>
        {!openCommentForm ? 
        <div>
            <button className='rounded p-2 mb-3 ' onClick={() => commentFormHandler()}>
                <span><u>Add Comment...</u></span>
            </button>
        </div>
        :
        <>
        <textarea onChange={handleChange} name="text" className='rounded p-3 mb-4' placeholder='Add comment...'/>
        <button onClick={() => submitComment()}>submit</button>
        <button onClick={() => setOpenCommentForm(false)}>Cancel</button>
        </>
        }

        {userComment.length ? 
        userComment.map(comment => (
            <div key={comment.date} className="d-flex flex-column justify-content-between align-items-center border border-dark">
            <p>
            {comment.text}
            </p>
            <span>{comment.date}</span>
            </div>
        ))
            
            :
            null
         }

        {!comments ? (<div>no comments yet</div>):(
          comments.map(comment => (
           
              <div key={comment._id} className="d-flex flex-column justify-content-between align-items-center border border-dark">
              <p>
              {comment.text}
              </p>
              <span>{comment.date}</span>
              </div>
            
          ))
        )}
        </>
    )
};

export default Comments;