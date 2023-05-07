import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';
import AddTitleModal from './AddTitleModal';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    const [blogPost,setBlogPost] = useState({title:'',html:'',category:''});
    
    useEffect(() => {
   const editor = gEditorConfig(setBlogPost);
   setEditor(editor);
    }, []);
   
  
  


   return(
    <>
   
   
<div id="editor"></div>
 
<AddTitleModal setBlogPost={setBlogPost} blogPost={blogPost}/>
   </>
   );
};
// 
export default GrapesEditor;