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

export const addEditorCommand = (editor) => {
    // Commands
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
  
    // Save Button
    editor.Commands.add("saveDb", {
      run: (editor, sender) => {
        sender && sender.set("active");
        editor.store();
      },
    });
  
    //Clear Button
    editor.Commands.add("cmd-clear", {
      run: (editor) => {
        editor.DomComponents.clear();
        editor.CssComposer.clear();
      },
    });
  
    //Undo
    editor.Commands.add("undo", {
      run: (editor) => editor.UndoManager.undo(),
    });
  
    // Redo
    editor.Commands.add("redo", {
      run: (editor) => editor.UndoManager.redo(),
    });
  
    editor.Commands.add("export", {
     run: (editor) => console.log(editor.getHtml()),
    });
  
    editor.Commands.add("new-tool-cmd", {
      run: (editor) => console.log("Checking New Toolbar"),
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


