import { useState } from "react";
import { marked } from "marked";
// import { Prism } from "prismjs";
import { highlight, languages } from "prismjs/components/prism-core";
// import { render } from "@testing-library/react";

marked.setOptions({
  break: true,
  highlight: function (code) {
    return highlight(code, languages.javascript, "javascript");
  },
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => {
  return <textarea id="editor" value={content} onChange={handleTextareaChange} />;
};

const Previewer = ({ content }) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(content, { renderer: renderer }),
      }}
    />
  );
};

function App() {
  const [content, setContent] = useState(`
  # This is H1
  ## This is H2
  [title](https://www.example.com)
  
  \`code\`
  \`\`\`
      {
        "firstName": "John",
        "lastName": "Smith",
        "age": 25
      }
    \`\`\`
    \`\`\`
    {
      const multipleLineCode = (param) => {
            if (param) {
              return param
              }
            }
          }
       \`\`\`

  - First Item
  - Second Item
  - Third Item


  > blockquote

  ![Image Alt Text Here](https://st2.depositphotos.com/1594308/8889/i/950/depositphotos_88898184-stock-photo-blond-girl-standing-on-stone.jpg)

  **Bold Text**
  `);
  const handleTextareaChange = (sev) => {
    setContent(sev.target.value);
  };

  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  );
}

export default App;
