import MyQuill from "./quill/MyQuill";
import { WriteContainer } from "./styles";

const Write = () => {
  return (
    <WriteContainer>
      <div className="content">
        <div className="text">
          <p>Digite ou cole o conteúdo</p>
        </div>
        <div>
          <MyQuill />
        </div>
      </div>
    </WriteContainer>
  );
};

export default Write;
