import { useState } from "react";

const ModifyStation = () => {
  const [station, setStation] = useState("");
  const [stationName, setStationName] = useState("");
  const [stationDistrict, setStationDistrict] = useState("");
  const [stationCity, setStationCity] = useState("");
  const [stationState, setStationState] = useState("");
  const [addNew, setAddNew] = useState(true);

  const handleDelete = () => {
    const a = prompt("Are you sure you want to Delete, if yes then type 'yes' else 'no'")
    if(a === 'yes'){

    }
  };

  return (
    <>
      <div className="container">
        <div className="title">Modify Station</div>
        {addNew && (
          <div>
            <label className="label">Get Station</label>
            <input
              className="input"
              value={station}
              onChange={(e) => setStation(e.target.value)}
            />
          </div>
        )}
        <div className="title">OR</div>
        {addNew && <button className="button">Add New Station</button>}
        <div>
          <label className="label">Station Name</label>
          <input
            className="input"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Station State</label>
          <input
            className="input"
            value={stationState}
            onChange={(e) => setStationState(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Station City</label>
          <input
            className="input"
            value={stationCity}
            onChange={(e) => setStationCity(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Station District</label>
          <input
            className="input"
            value={stationDistrict}
            onChange={(e) => setStationDistrict(e.target.value)}
          />
        </div>
        {!addNew && (
          <button className="button" onClick={handleDelete}>
            Delete Station
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

export default ModifyStation;
