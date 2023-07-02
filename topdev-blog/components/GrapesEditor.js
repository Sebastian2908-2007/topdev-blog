import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';
import AddMetaDataModal from './AddMetaDataModal';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    const [blogPost,setBlogPost] = useState({title:'',html:'',category:'',metaDescription:'',keywords:'',thumbNail:''});
    const [thumbNail,setThumbNail] = useState('');
    
    useEffect(() => {
   const editor = gEditorConfig(setThumbNail,setBlogPost);
   setEditor(editor);
    }, []);
   
  useEffect(() => {console.log(blogPost,"FRESH")},[blogPost])
  


   return(
    <>
   
   
<div id="editor"></div>
 
<AddMetaDataModal setBlogPost={setBlogPost} blogPost={blogPost} thumbNail={thumbNail}/>
   </>
   );
};
// 
export default GrapesEditor;