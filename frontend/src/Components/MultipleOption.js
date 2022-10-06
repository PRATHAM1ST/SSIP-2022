const MultipleOption = ({ question, values }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{question}</label>
      {values.map((value) => (
        <div className="form-check" key={value}>
          <input
            className="form-check-input"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleOption;
