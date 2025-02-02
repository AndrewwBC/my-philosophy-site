import MyQuill from "./quill/MyQuill";
import { WriteContainer } from "./styles";

const Write = () => {
  return (
    <WriteContainer>
      <div className="content">
        <div className="text">
          <p>Digite ou insira o conteúdo</p>
        </div>
        <div>
          <MyQuill />
        </div>
      </div>
    </WriteContainer>
  );
};

export default Write;
