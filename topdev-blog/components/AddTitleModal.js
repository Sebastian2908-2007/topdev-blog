import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function AddTitleModal({setBlogPost,blogPost}) {
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    fetch('api/apiCreatePost',{
        method:'POST',
        body: JSON.stringify(blogPost),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
   
};
const handleChange = (event) => {
const {name,value} = event.target;
setBlogPost({
    ...blogPost,
    [name]:value
});
};
  const handleClose = () => {setShow(false);handleSubmit()};
  const handleShow = () => {setShow(true); console.log(show)}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit Blog Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter blogpost Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><input onChange={handleChange} name='title'/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTitleModal;