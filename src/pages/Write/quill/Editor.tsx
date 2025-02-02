import Quill from "quill";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import "./style.css";
import { EditorDiv } from "./styles";

// Editor is an uncontrolled React component
const Editor = forwardRef(
  ({ defaultValue, onTextChange, onSelectionChange }: any, ref: any) => {
    const containerRef: any = useRef(null);
    const defaultValueRef: any = useRef(defaultValue);
    const onTextChangeRef: any = useRef(onTextChange);
    const onSelectionChangeRef: any = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );

      const toolbarOptions = [
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown

        ["bold", "italic", "underline", "strike"], // toggled buttons

        ["blockquote", "code-block"],
        ["link", "image"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ direction: "rtl" }], // text direction

        [{ header: [1, 2, 3, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ];

      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      });

      ref!.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref!.current = null;
        container.innerHTML = "";
      };
    }, [ref]);

    return <EditorDiv ref={containerRef} />;
  }
);

Editor.displayName = "Editor";

export default Editor;
