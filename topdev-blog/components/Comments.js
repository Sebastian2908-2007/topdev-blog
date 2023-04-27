import { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import dynamic from 'next/dynamic';
const DltEditComment = dynamic(() =>import('@/components/DltEditComment'),{ssr: false});

const Comments = ({postObj}) => { 
    const comments = postObj.comments;
    // below state will handle a comment on submission in order to update the UI
    const [userComment,setUserComment] = useState([]);
    // below state opens comment form
    const [openCommentForm,setOpenCommentForm] = useState(false);
    // this is the text for a comment
    const [text, setText] = useState();
    // this cookie is used to determine if a user is logged in
    const isLoggedIn = cookie.get('isLoggedIn');

// this makes sure a user is logged in before opening the comment form
const commentFormHandler = () => {
    if(isLoggedIn) {
        setOpenCommentForm(true);
    }else{
        alert('you must login to leave comments');
    };
};

// below handles comment submission
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
  // below sets the comment state to dynamically update ui with new comment so api call is not needed
  setUserComment([...userComment, {text: commentData.text, date: commentData.date, userName:commentData.user.userName}]);
};

// below gets comment text value from the textarea element
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
            <div key={comment.text} className="
            d-flex flex-column
            justify-content-between
            align-items-center
            w-100
            mb-3"
             >
           <span className='mb-2'><u>By {comment.userName}</u></span>
            <p>
            {comment.text}
            </p>
            <span className='text-info'>{comment.date.split('T')[0]}</span>
            </div>
        ))
            
            :
            null
         }

        {!comments ? (<div>no comments yet</div>):(
          comments.map(comment => (
           
              <div key={comment._id} className="
              d-flex
              flex-column
              justify-content-between
              align-items-center
              w-100
              mb-3"
              >
                <div className='d-flex flex-row justify-content-between w-100'>
                 <span className='mb-2'><u>By {comment.user.userName}</u></span>
                 <DltEditComment
                  comment={comment}
                  />
                </div>
              <p>
              {comment.text}
              </p>
              <span className='text-info'>{comment.date.split('T')[0]}</span>
              </div>
            
          ))
        )}
        </>
    )
};

export default Comments;