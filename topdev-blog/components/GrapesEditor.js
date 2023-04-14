import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';
import AddTitleModal from './AddTitleModal';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    const [blogPost,setBlogPost] = useState({title:'',html:''});
    
    useEffect(() => {
   const editor = gEditorConfig(setBlogPost);
   setEditor(editor);
   console.log(blogPost);
    }, [blogPost]);
   
  
  


   return(
    <>
   
   
<div id="editor"></div>
 
<AddTitleModal setBlogPost={setBlogPost} blogPost={blogPost}/>
   </>
   );
};
// 
export default GrapesEditor;