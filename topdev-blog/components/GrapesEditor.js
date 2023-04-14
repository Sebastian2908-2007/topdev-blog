import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    const [blogPost,setBlogPost] = useState({title:'',html:''});
    useEffect(() => {
   const editor = gEditorConfig(setBlogPost);
   setEditor(editor);
   console.log(blogPost);
    }, [blogPost]);
   
  
  
const handleSubmit = () => {
    fetch('api/apiCreatePost',{
        method:'POST',
        body: JSON.stringify(blogPost),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
};

   return(
    <>
<button onClick={handleSubmit}>Submit</button>
<div id="editor"></div>
 

   </>
   );
};

export default GrapesEditor;