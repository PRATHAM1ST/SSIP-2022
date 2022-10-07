import { useState } from "react";

const TextArea = ({ question, id }) => {
  const maxChar = 300;

  const [charCount, setCharCount] = useState(0);

  const handleTextArea = (event)=>{
    setCharCount(event.target.value.length)
  };

  return (
    <div className="">
      <div className="question">
        <span className="question-number">{id}</span>{question}
      </div>

      <div className="">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{height: 100}}
          onChange={handleTextArea}
          maxLength={maxChar}
        ></textarea>
        <label className="char-count" htmlFor="floatingTextarea2">{maxChar - charCount} / {maxChar}</label>
      </div>
    </div>
  );
};

export default TextArea;
