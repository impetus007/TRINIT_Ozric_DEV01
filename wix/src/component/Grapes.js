import React, { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import Grapesjs from "grapesjs";
import "./Grapes.css";
import dynamicConfig from "./GrapesjsConfig";

const Grapes = () => {
  useEffect(() => {
    loadGrapesjs();
  }, []);
  const loadcomponents = (editor) => {
    editor.BlockManager.add("my-block-id", {
      // ...
      content: {
        tagName: "div",
        draggable: false,
        attributes: { "some-attribute": "some-value" },
        components: [
          {
            tagName: "span",
            content: "<b>Some static content</b>",
          },
          {
            tagName: "div",
            // use `content` for static strings, `components` string will be parsed
            // and transformed in Components
            components: "<span>HTML at some point</span>",
          },
        ],
      },
    });
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top",
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: "<u>B</u>",
          command: "sw-visibility", // Built-in command
        },
        {
          id: "export",
          className: "btn-open-export",
          label: "Exp",
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "show-json",
          className: "btn-show-json",
          label: "JSON",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                  ${JSON.stringify(editor.getComponents())}
                </textarea>`
              )
              .open();
          },
        },
      ],
    });

    //traits
    editor.Commands.add("show-traits", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        return row.querySelector(".traits-container");
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = "";
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = "none";
      },
    });
  };

  const loadGrapesjs = async () => {
    const editor = await Grapesjs.init(dynamicConfig());
    loadcomponents(editor);
  };

  return (
    <>
      <div class="panel__top">
        <div class="panel__basic-actions"></div>
        <div class="panel__switcher"></div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs">
            <h1>Hello World Component!</h1>
          </div>
        </div>
        <div class="panel__right">
          <div class="layers-container"></div>
          <div class="styles-container"></div>
          <div class="traits-container"></div>
        </div>
      </div>
      <div id="blocks"></div>
    </>
  );
};

export default Grapes;
