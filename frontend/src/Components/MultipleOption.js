const MultipleOption = ({ question, values, id }) => {
  return (
    <div className="mb-3">
      <div className="question">
        <span className="question-number">{id}</span>{question}
      </div>
      {values.map((value) => (
        <div className="options" key={value}>
          <input
            className="checkbox"
            type="checkbox"
          />
          <label className="" htmlFor="flexRadioDefault1">
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleOption;
