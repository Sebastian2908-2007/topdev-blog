import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';
import AddMetaDataModal from './AddMetaDataModal';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    const [blogPost,setBlogPost] = useState({title:'',html:'',category:'',metaDescription:'',keywords:''});
    
    useEffect(() => {
   const editor = gEditorConfig(setBlogPost);
   setEditor(editor);
    }, []);
   
  
  


   return(
    <>
   
   
<div id="editor"></div>
 
<AddMetaDataModal setBlogPost={setBlogPost} blogPost={blogPost}/>
   </>
   );
};
// 
export default GrapesEditor;