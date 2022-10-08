import { useEffect, useState } from "react";

const ModifyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/getQuestions")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      <div>
        <div className="title"> Modify Questions</div>
        <div className="addQuestions">
            <input className="question"></input>
        </div>
      </div>
    </>
  );
};

export default ModifyQuestions;
