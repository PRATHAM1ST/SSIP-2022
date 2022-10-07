const SingleOption = ({ question, values, id }) => {
  return (
    <div className="">
      <div className="question">
        <span className="question-number">{id}</span>{question}
      </div>
      {values.map((value) => (
        <div className="options" key={value}>
          <input
            className="checkbox"
            type="radio"
            name={id}
            id={id}
          />
          <label className="" htmlFor={id}>
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SingleOption;
