import { useState } from "react";
import "../Pages Css/LoginRegForm.css";

const AdminRegister = () => {
  const [PIN, setPIN] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     throw err;
    //   });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="LoginRegForm" className="container">
        <div className="title">Admin Register</div>

        <div className="">
          <label htmlFor="PIN" className="label">
            PIN: Police Identification Number
          </label>
          <input
            id="PIN"
            className="input"
            type="number"
            name="PIN"
            placeholder="PIN Number"
            value={PIN}
            onChange={(e) => setPIN(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="re-password" className="label">
            Re-Password
          </label>
          <input
            id="re-password"
            className="input"
            type="password"
            name="re-password"
            placeholder="Re-Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>
        <input className="button" type="submit" value="Register" />
      </form>
    </>
  );
};

export default AdminRegister;
