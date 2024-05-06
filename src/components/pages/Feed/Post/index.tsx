import { Content } from "./styles";

const Post = () => {
  return (
    <Content>
      <div>
        <p className="date">Postagem realizada em 25/10/2023</p>
      </div>
      <div>
        <p className="title">Título</p>
      </div>
      <div className="textContainer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates a
          numquam, fugiat, nulla eum ea doloribus repudiandae hic ipsam quidem
          accusantium magni porro quam necessitatibus? Accusantium nam
          repellendus odit possimus.
        </p>
      </div>
    </Content>
  );
};

export default Post;
