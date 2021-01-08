import { useState } from "react";
import "./App.css";

function App() {
  const [Content, setContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const getValue = (e) => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value,
    });
    console.log(Content);
  };
  return (
    <div className="App">
      <h1>게시판</h1>

      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <textarea
          className="text-area"
          placeholder="내용"
          onChange={getValue}
          name="content"
        ></textarea>
      </div>
      <button
        className="submit-button"
        onClick={() => {
          setViewContent(viewContent.concat({ ...Content }));
        }}
      >
        입력
      </button>

      <div className="movie-container">
        {viewContent.map((Element) => (
          <div>
            <h2>{Element.title}</h2>
            <div>{Element.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
