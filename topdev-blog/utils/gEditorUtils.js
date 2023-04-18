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

export const addEditorCommand = (editor,htmlSetter) => {
    // Commands
    editor.Commands.add("export", {
     run: (editor) => {
       console.log(editor.getHtml());
       htmlSetter({title:'some title',html:editor.getHtml()});
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
  }
]
}
    )
  };


