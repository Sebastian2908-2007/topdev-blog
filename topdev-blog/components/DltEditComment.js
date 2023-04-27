import jwt from "jsonwebtoken";
const DltEditComment = ({comment}) => {
    console.log(comment.blogPost);
    const commentToDlt = comment._id;
    const blogPost = comment.blogPost;
    let editPriv= null;
    const user_token = localStorage.getItem('user_token');
    const decodedToken = jwt.decode(user_token);
    const user = decodedToken.id;
    const commentUserId = comment.user._id;
    if(user === commentUserId){
        editPriv = true;
    }
    const deleteComment = async () => {
     const response = await fetch('/api/deleteComment',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({blogPost:blogPost,comment:commentToDlt}),
     }); 
     const data = await response.json();
     console.log(data);
    };

    return(
         editPriv ? (
    <button onClick={() => deleteComment()} className="btn btn-light pt-0 px-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </button>
        ):(null)
        
    );
};
export default DltEditComment;