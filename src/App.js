import { useState } from "react";

const Editor = ({ content, handleTextareaChange }) => {
  return (
    <textarea value={content} onChange={handleTextareaChange}/>
  )
};

function App() {
  const [content, setContent] = useState("Say She no want Daveedo, she wanty my love o");
  const handleTextareaChange = (sev) => {
    setContent(sev.target.value)
  }
  
  return (
    <div className="main">
      < Editor content={content} handleTextareaChange={handleTextareaChange} />
    </div>
  );
}

export default App;
