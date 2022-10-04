import { useState } from "react";
import { marked } from 'marked';
// import { Prism } from "prismjs";
import { highlight, languages } from 'prismjs/components/prism-core';
// import { render } from "@testing-library/react";


marked.setOptions({
  break: true,
  highlight: function (code) {
    return highlight(code, languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text){
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => {
  return (
    <textarea value={content} onChange={handleTextareaChange}/>
  )
};

const Previewer = ({ content }) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(content, { renderer: renderer})
      }}
    />
  )
}

function App() {
  const [content, setContent] = useState(`
  ## This is H2

  ![alt text](https://image.shutterstock.com/image-photo/sexy-body-young-sporty-healthy-600w-678312892.jpg)
  `);
  const handleTextareaChange = (sev) => {
    setContent(sev.target.value)
  }
  
  return (
    <div className="main">
      < Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer  content={content}/>
    </div>
  );
}

export default App;
