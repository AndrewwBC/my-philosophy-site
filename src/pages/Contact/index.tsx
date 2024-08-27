import { Content } from "./styles";

const Contact = () => {
  const listOfLinks = [
    {
      href: "mailto:andrewborgescampos@gmail.com",
      text: "Email",
    },
    {
      href: "https://github.com/AndrewwBC",
      text: "Github",
    },
    {
      href: "https://www.linkedin.com/in/andrew-campos-266bb420a/",
      text: "Linkedin",
    },
  ];

  return (
    <Content>
      <div>
        <p className="introText">Entre em contato comigo via:</p>
      </div>
      <ul>
        {listOfLinks.map((item) => (
          <li>
            <a href={item.href} target="_blank">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </Content>
  );
};

export default Contact;
