import { useState } from "react";
import "../Pages Css/LoginRegForm.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/admin-login', {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.length > 0){
          window.location.replace("/dashboard");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="LoginRegForm" className="container">
        <div className="title">Admin Login</div>
        <div className="">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Login</button>
        {/* <button className="g-recaptcha button" 
        data-sitekey="6LclcGMiAAAAACcMErD4E5YdkngN-QSSHLSfS9Jr" 
        data-callback='onSubmit' 
        data-action='submit'
        type="submit">
          Login</button> */}
      </form>
    </>
  );
};

export default AdminLogin;
