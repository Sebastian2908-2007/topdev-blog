import { gEditorConfig } from '@/utils/editorConfig';
import { useEffect,useState } from 'react';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    useEffect(() => {
   const editor = gEditorConfig();
   setEditor(editor);
    }, []);
   
  
  


   return(
    <>

<div id="editor"></div>
 

   </>
   );
};

export default GrapesEditor;