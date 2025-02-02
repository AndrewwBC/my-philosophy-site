import { Content } from "./styles";

function Green({ text }: { text: string }) {
  return (
    <Content>
      <span>{text}</span>
    </Content>
  );
}

export default Green;
