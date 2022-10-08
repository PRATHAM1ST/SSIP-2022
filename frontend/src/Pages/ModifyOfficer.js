import { useState } from "react";

const ModifyOfficer = () => {
  const [officer, setofficer] = useState("");
  const [officerName, setofficerName] = useState("");
  const [officerDistrict, setofficerDistrict] = useState("");
  const [officerCity, setofficerCity] = useState("");
  const [officerState, setofficerState] = useState("");
  const [addNew, setAddNew] = useState(true);

  const handleDelete = () => {
    const a = prompt("Are you sure you want to Delete, if yes then type 'yes' else 'no'")
    if(a === 'yes'){

    }
  };

  return (
    <>
      <div className="container">
        <div className="title">Modify officer</div>
        {addNew && (
          <div>
            <label className="label">Get officer</label>
            <input
              className="input"
              value={officer}
              onChange={(e) => setofficer(e.target.value)}
            />
          </div>
        )}
        <div className="title">OR</div>
        {addNew && <button className="button">Add New officer</button>}
        <div>
          <label className="label">officer Name</label>
          <input
            className="input"
            value={officerName}
            onChange={(e) => setofficerName(e.target.value)}
          />
        </div>
        <div>
          <label className="label">officer State</label>
          <input
            className="input"
            value={officerState}
            onChange={(e) => setofficerState(e.target.value)}
          />
        </div>
        <div>
          <label className="label">officer City</label>
          <input
            className="input"
            value={officerCity}
            onChange={(e) => setofficerCity(e.target.value)}
          />
        </div>
        <div>
          <label className="label">officer District</label>
          <input
            className="input"
            value={officerDistrict}
            onChange={(e) => setofficerDistrict(e.target.value)}
          />
        </div>
        {!addNew && (
          <button className="button" onClick={handleDelete}>
            Delete officer
          </button>
        )}
        <button className="g-recaptcha button" 
        data-sitekey="6LclcGMiAAAAACcMErD4E5YdkngN-QSSHLSfS9Jr" 
        data-callback='onSubmit' 
        data-action='submit'
        type="submit">{(addNew && "Add New") || (!addNew && "Update")}</button>
      </div>
    </>
  );
};

export default ModifyOfficer;
