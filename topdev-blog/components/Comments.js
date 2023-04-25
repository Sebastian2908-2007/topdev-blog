import { useState } from 'react';
import cookie from 'js-cookie';

const Comments = ({postObj}) => {
   
    const comments = postObj.comments;
    console.log(comments,"VVVV");
    const [openCommentForm,setOpenCommentForm] = useState(false);
    const [text, setText] = useState({text:''})
    const isLoggedIn = cookie.get('isLoggedIn');
    console.log("IS LOG",isLoggedIn);

const commentFormHandler = () => {
    if(isLoggedIn) {
        setOpenCommentForm(true);
    }else{
        alert('you must login to leave comments');
    };
};

const submitComment = () => {
    const blog_post_id = postObj._id;
    const user_token = localStorage.getItem('user_token');
    const decodedToken = jwt.decode(user_token);
    console.log(blog_post_id);
    console.log(user_token);
    console.log(decodedToken);
};

const handleChange = (event) => {
    const {name,value} = event.target;
    setText({
        ...text,
        [name]:value
    });

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
        <button>submit</button>
        <button onClick={() => setOpenCommentForm(false)}>Cancel</button>
        </>
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