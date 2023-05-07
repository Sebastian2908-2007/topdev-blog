import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddTitleModal({setBlogPost,blogPost}) {

  const [show, setShow] = useState(false);
  const [categories,setCategories] = useState(null);

  const handleSubmit = () => {
    fetch('api/apiCreatePost',{
        method:'POST',
        body: JSON.stringify(blogPost),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
   
};

const getCategories = async () => {
  if(categories) {
    return;
  }
  try{
 const response = await fetch('/api/getCategories');
 const categoryData = await response.json();
 setCategories(categoryData);
  }catch(e){
    console.log(e);
  }
};

getCategories();

useEffect(() => console.log(blogPost),[blogPost]);

const handleChange = (event) => {
const {name,value} = event.target;
setBlogPost({
    ...blogPost,
    [name]:value
});
};

  const handleClose = () => {setShow(false);handleSubmit()};
  const handleShow = () => {setShow(true);}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add title & category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter blogpost Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><input onChange={handleChange} name='title'/></Modal.Body>
        
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Dropdown button"
        className="mt-2"
      >
        <div className='d-flex flex-column'>
        {categories ? (categories.map(category => (
           <button 
           className='text-white bg-transparent border-0'
           onClick={(e) => {setBlogPost({
            ...blogPost,
            category: e.target.value
           })}} 
           value={category.category} 
           key={category._id}
           >
            {category.category}
          </button>
        ))):(<span>Separated link</span>)}
        </div>
        
      </DropdownButton>
      <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Submit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTitleModal;