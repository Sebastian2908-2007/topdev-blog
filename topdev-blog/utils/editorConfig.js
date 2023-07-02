import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesJsPresetWebpage from 'grapesjs-preset-webpage';
import { addEditorCommand,addPanels } from "./gEditorUtils";

export const gEditorConfig = (previousData,htmlSetter) => {
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
                label: 'H1',
               
                // Use `image` component
                content: `<h1>Main heading</h1>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'sub text',
                label: 'H2',
               
                // Use `image` component
                content: `<h2 class="mb-3 mt-3">Sub heading</h2>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'sub sub text',
                label: 'H3',
               
                // Use `image` component
                content: `<h3 class="mb-3 mt-2">Sub sub heading</h3>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'sub sub sub text',
                label: 'H4',
               
                // Use `image` component
                content: `<h4 class="mb-3 mt-1">Sub sub heading</h4>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'Link',
                label: 'Link',
               
                // Use `image` component
                content: `<a href="https://topdev.tech/signup" target="_blank" class="mb-3">link txt</a>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'paragraph',
                label: 'P',
               
                // Use `image` component
                content: `<p class="mb-5 text-center">paragraph</p>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'list',
                label: 'LST',
               
                // Use `image` component
                content: `<ul class="mb-4">
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                           </ul>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'list item',
                label: 'LI',
               
                // Use `image` component
                content: `<li>item</li>`,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'basic-post',
                label: 'BP',
               
                // Use `image` component
                content: `
                <h1>H1 Title</h1>
            <h2 class="mt-3 mb-3">h2 sub title</h2>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>     
            </p>
            
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph  
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>   
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
       
            
            <h2 class="mt-3 mb-3">h2 sub title</h2>
            <p class="mb-5">
            paragraph 
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>     
            </p>
            
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>   
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
       
            
            <h2 class="mt-3 mb-3">h2 sub title</h2>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>     
            </p>
            
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph 
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>   
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
       
            
            <h2 class="mt-3 mb-3">h2 sub title</h2>
            <p class="mb-5">
            paragraph 
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>     
            </p>
            
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>   
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
            <p class="mb-5">
            paragraph
             <br/>
             <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
            </p>
                `,
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'mid-complexity-post',
                label: 'MCP',
               
                // Use `image` component
                content: `
                <h1>My cool Title</h1>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                <h2 class="mt-3 mb-3">H2 Sub Heading</h2>
                <h3 class=" mb-3">H3 sub sub Heading</h3>
                <p class="text-center mb-3">
             Paragraph
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>
                </p>
                `, 
                  // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              },
              {
                id: 'migh-complexity-post',
                label: 'HCP',
               
                // Use `image` component
                content: `
                <h1 class="mb-3">BLog post title</h1>
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
               
                <h2 class="mb-3">Section title</h2>
                <p class="mb-3 text-center">
             PARAGRAPH
                    <br/>
                    <a href="https://topdev.tech/signup" target="_blank" >Need a Website or Web App? Signup for a free consultation</a>      
                </p>
       
                <h3 class="mb-3">sub sub title</h3>
                
                <ul>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                   <li class="mb-2">list item</li>
                </ul>
                `, 
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
        
        addEditorCommand(editor,previousData,htmlSetter);
        //addPanels(panels,editor);
  addPanels(editor);

};
