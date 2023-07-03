export const panels = {
    defaults:[
        {
            id: "basic-actions",
            //visible:true,
            el: ".panel",
            //el: ".gjs-pn-buttons",
      buttons: [
    {
        id: "export",
        className: "fa fa-download",
        command: "export",
      }
    ]
}
    ]

};

export const addEditorCommand = (editor,setThumbNail,htmlSetter) => {
    // Commands
    editor.Commands.add("export", {
     run: (editor) => {
       htmlSetter({title:'some title',html:editor.getHtml()});
      
       editor.DomComponents.clear();
       editor.CssComposer.clear();
      },
    });
    editor.Commands.add("getimage", {
     run: (editor) => {
       //htmlSetter({title:'some title',html:editor.getHtml()});
       const rawHtml = editor.getHtml();
       //console.log(rawHtml.match(/<img[^>]+src="data([^">]+)/g)[0] + '"/>');
      const thumbNail = rawHtml.match(/<img[^>]+src="data([^">]+)/g)[0]  + '"/>';
     
      // const thumbNail = rawHtml.match(/<img([^">]+?)/);
       setThumbNail(thumbNail);
       console.log(thumbNail);
       editor.DomComponents.clear();
       editor.CssComposer.clear();
      },
    });
  

    
  };

  export const addPanels = (editor) => {
    editor.Panels.addPanel(
      {
        id: "basic-actions",
        //visible:true,
        el: "#editor",
        //el: ".gjs-pn-buttons",
  buttons: [
{
    id: "export",
    className: "fa fa-download",
    command: "export",
  },
{
    id: "getimage",
    className: "fa fa-picture-o",
    command: "getimage",
  }
]
}
    )
  };


