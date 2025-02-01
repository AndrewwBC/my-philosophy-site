import { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";

import "./style.css";

const Delta = Quill.import("delta");

const MyQuill = () => {
  const [range, setRange] = useState();
  const [test, setTeste] = useState("");

  const quillRef = useRef();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Editor ref={quillRef} />
      <div className="controls">
        <button
          className="controls-right"
          type="button"
          onClick={() => {
            console.log(quillRef.current.editor.scroll.domNode.innerHTML);
            setTeste(quillRef.current.editor.scroll.domNode.innerHTML);
          }}
        >
          Get Content Length
        </button>
      </div>
      <div
        id="editor"
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
};

export default MyQuill;
