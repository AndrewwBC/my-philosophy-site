import { useRef } from "react";
import Editor from "./Editor";

import "./style.css";
import { MyButton } from "../../../components/button";

const MyQuill = () => {
  const quillRef: any = useRef();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Editor ref={quillRef} />

      <MyButton
        type="button"
        style={{ justifySelf: "center", marginTop: "20px" }}
        onClick={() => {
          console.log(quillRef.current.editor);
        }}
      >
        Postar
      </MyButton>
    </div>
  );
};

export default MyQuill;
