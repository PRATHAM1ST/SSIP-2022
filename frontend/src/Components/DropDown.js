const DropDown = ({ question, values, id }) => {
  return (
    <div className="mb-3">
      <div className="question">
        <span className="question-number">{id}</span>{question}
      </div>
      <select className="" aria-label="Default select example">
        <option defaultChecked>Select from this</option>
        {values.map(value => 
            <option value={value} key={value}>{value}</option>
        )}
      </select>
    </div>
  );
};

export default DropDown;
