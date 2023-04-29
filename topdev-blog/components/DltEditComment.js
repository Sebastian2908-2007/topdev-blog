import jwt from "jsonwebtoken";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const DltEditComment = ({comment,isLoggedIn,setIsEdit,setText,setCommentToEdit}) => {
    const commentToDlt = comment._id;
    const blogPost = comment.blogPost;
    let editPriv= null;
    let user_token = null; 
    let decodedToken = null;
    let user = null;
    if(localStorage.getItem('user_token')) {
     user_token = localStorage.getItem('user_token');
     decodedToken = jwt.decode(user_token);
     user = decodedToken.id;
    };
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
     window.location.reload();
    };

    return(
         editPriv && isLoggedIn ? (
            <OverlayTrigger
            trigger="click"
            placement={'top'}
            overlay={
              <Popover id={`popover-positioned-top`}>
                <Popover.Header as="h3">Edit or Delete</Popover.Header>
                <Popover.Body>
                  <div className="d-flex flex-column">
                    <button 
                    data-comment = {comment._id}
                    className="btn btn-light pt-0 px-0"
                    onClick={(e) => {
                        const cmtToEdit = e.target.getAttribute('data-comment');
                        console.log(cmtToEdit, comment._id);
                        if(cmtToEdit === comment._id) {
                        setIsEdit(true); setText(comment.text);setCommentToEdit(cmtToEdit);
                         }
                        }
                    }
                    >
                    Edit
                </button>
                    <button
                      className="btn btn-light pt-0 px-0"
                      onClick={() => deleteComment()}
                      >
                        Delete
                    </button>
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
    <Button variant="light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </Button>
    </OverlayTrigger>
        ):(null)
        
    );
};
export default DltEditComment;