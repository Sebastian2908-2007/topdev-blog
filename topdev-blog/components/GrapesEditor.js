import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesJsPresetWebpage from 'grapesjs-preset-webpage';

import { useEffect,useState } from 'react';


  

const GrapesEditor = () => {
    const [editor,setEditor] = useState(null);
    useEffect(() => {
        console.log('effect running')
     const editor = grapesjs.init({
        blockManager: {
            appendTo: '#editor',
            blocks: [
              {
                id: 'image',
                label: 'Image',
                media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                </svg>`,
                // Use `image` component
                content: { type: 'image' },
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              }
            ],
          },
           
              container: '#editor',
              height: '1000px',
              width: '100%',
              plugins: [grapesJsPresetWebpage],
              pluginsOpts: {
               grapesJsPresetWebpage:{
                block: [
                    {
                      id: 'image',
                      label: 'Image',
                      media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                      </svg>`,
                      // Use `image` component
                      content: { type: 'image' },
                      // The component `image` is activatable (shows the Asset Manager).
                      // We want to activate it once dropped in the canvas.
                      activate: true,
                      // select: true, // Default with `activate: true`
                    }
                  ],
               }
              }
            
         
        })
       setEditor(editor); 
    }, []);

   return(
    <>

    <div id="editor"></div>
   

   </>
   );
};

export default GrapesEditor;