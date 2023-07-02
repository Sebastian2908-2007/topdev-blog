import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function AddMetaDataModal({setBlogPost,blogPost,thumbNail}) {

  const [show, setShow] = useState(false);
  const [categories,setCategories] = useState(null);

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



const handleChange = (event) => {
const {name,value} = event.target;
setBlogPost({
    ...blogPost,
    [name]:value
});
};

  const handleClose = () => {setShow(false);};
  const handleShow = () => {setShow(true);};

  const handleSubmit = () => {
    
  
    fetch('api/apiCreatePost',{
        method:'POST',
        body: JSON.stringify({...blogPost, thumbNail:thumbNail}),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add title & category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='w-100 text-center' >Enter blogpost Title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-between text-center'>
          <label htmlFor='title'>Title</label>
          <input className='title-input' onChange={handleChange} name='title'/>
          <label htmlFor='metaDescription'>Meta Description</label>
          <textarea className='title-input' onChange={handleChange} name='metaDescription'/>
          <label htmlFor='keywords'>Keywords</label>
          <input className='title-input' onChange={handleChange} name='keywords'/>
        
      <DropdownButton
       as={ButtonGroup}
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Category"
        className="mt-2"
        onSelect={(e) => {setBlogPost({
          ...blogPost,
          category: e
         })}} 
      >
        <div className='d-flex flex-column'>
        {categories ? (categories.map(category => (
           <Dropdown.Item
           className='cat-button'
           eventKey={category.category} 
           key={category._id}
           >
            {category.category}
          </Dropdown.Item>
        ))):(<span>Separated link</span>)}
        </div>
        
      </DropdownButton>
      </Modal.Body>
      <Modal.Footer className='d-flex flex-row justify-content-between'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Submit Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMetaDataModal;