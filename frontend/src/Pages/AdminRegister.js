import { useState } from "react";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="re-password" className="form-label">
            Re-Password
          </label>
          <input
            id="re-password"
            className="form-control"
            type="re-password"
            name="re-password"
            placeholder="Re-Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </>
  );
};

export default AdminRegister;
