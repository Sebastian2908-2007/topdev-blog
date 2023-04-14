import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesJsPresetWebpage from 'grapesjs-preset-webpage';
import { addEditorCommand,addPanels } from "./gEditorUtils";

export const gEditorConfig = (htmlSetter) => {
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
              },
              {
                id: 'text',
                label: 'Main heading',
               
                // Use `image` component
                content: `<h1>Main heading</h1>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'sub text',
                label: 'sub heading',
               
                // Use `image` component
                content: `<h2>Sub heading</h2>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'sub sub text',
                label: 'sub sub heading',
               
                // Use `image` component
                content: `<h3>Sub sub heading</h3>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'paragraph',
                label: 'paragraph',
               
                // Use `image` component
                content: `<p>paragraph</p>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'list',
                label: 'list',
               
                // Use `image` component
                content: `
                <ul id='my-list'>
                <li>item1</li>
                
                <li>item2</li>
                
                <li>item3</li>
                
                </ul>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
            ],
          },
       
          container: '#editor',
          //panels: { defaults: [] },
        });
        
        addEditorCommand(editor,htmlSetter);
        //addPanels(panels,editor);
  addPanels(editor);

};
