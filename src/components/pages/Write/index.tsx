import { useState } from "react";
import { Content, Input } from "./styles";
import { postAPI } from "./api";

const Write = () => {
  const [title, setTitle] = useState("");
  const [categorie, setCategorie] = useState("");

  function addParagraph() {
    const textContainer = document.getElementById("textContainer");

    const newParagraph = document.createElement("p");

    newParagraph.contentEditable = "true";

    newParagraph.addEventListener("keydown", (e) => handleKeyDown(e));

    newParagraph.addEventListener("focus", () => {
      const selection = window.getSelection()!;
      const range = document.createRange();
      range.selectNodeContents(newParagraph);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    });

    textContainer?.appendChild(newParagraph);
    const lengthOfChilds = textContainer?.childNodes.length!;
    newParagraph.id = `paragraph${lengthOfChilds}`;

    newParagraph.focus();
  }

  function removeParagraph() {
    const textContainer = document.getElementById("textContainer");

    textContainer?.removeChild(textContainer.lastChild!);

    if (textContainer?.lastChild instanceof HTMLParagraphElement) {
      textContainer.lastChild.focus();
    }

    console.log(textContainer?.lastChild);
  }
  interface CustomKeyboardEvent extends KeyboardEvent {
    currentTarget: {
      id: string;
      addEventListener: () => void;
      dispatchEvent: () => boolean;
      removeEventListener: () => void;
    };
  }
  function handleKeyDown(e: CustomKeyboardEvent) {
    const textContainer = document.getElementById("textContainer");

    if (e.key === "Enter") {
      addParagraph();
    } else if (e.key === "Backspace") {
      const paragraphId = e.currentTarget.id;

      const paragraph = document.getElementById(
        paragraphId
      ) as HTMLParagraphElement;

      if (paragraph.textContent?.length === 0) {
        if (textContainer?.childNodes.length! > 1) removeParagraph();
      }
    }
  }

  function handlePost() {
    const textContainer = document.getElementById("textContainer");
    const textOfEachParagraph: { text: string }[] = [];

    textContainer?.childNodes.forEach(({ textContent }) => {
      alert(textContent);
      textOfEachParagraph.push({
        text: textContent!,
      });
    });

    console.log(title, textOfEachParagraph);

    postAPI(title, textOfEachParagraph, categorie);
  }

  return (
    <Content>
      <p>Escreva a postagem.</p>

      <Input onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <div
        onClick={() => {
          const textContainer = document.getElementById("textContainer");

          if (textContainer?.childNodes.length! < 1) {
            addParagraph();
          }
        }}
        id="textContainer"
        className="textContainer"
      ></div>

      <Input
        onChange={(e) => setCategorie(e.target.value)}
        placeholder="Categoria"
      />

      <button onClick={handlePost}>Postar</button>
    </Content>
  );
};

export default Write;
