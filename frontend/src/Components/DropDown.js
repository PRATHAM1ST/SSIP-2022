const DropDown = ({ question, values }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{question}</label>

      <select className="form-select" aria-label="Default select example">
        <option defaultChecked>Select from this</option>
        {values.map(value => 
            <option value={value} key={value}>{value}</option>
        )}
      </select>
    </div>
  );
};

export default DropDown;
