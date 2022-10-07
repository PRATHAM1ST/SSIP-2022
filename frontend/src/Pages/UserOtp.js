import { useState } from "react";
import "../Pages Css/UserOtp.css";

const UserOtp = () => {
  const [gotMobileNo, setGotMobileNo] = useState(false);
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");

  const handleMobileNo = (event) => {
    event.preventDefault();
    setGotMobileNo(true);
    fetch("http://127.0.0.1:8000")
      .then((res) => {res.json(); console.log(res);})
      .then((data) => console.log(data))
      .catch((err) => {
        throw err;
      });
  };

  const handleChangeMobileNo = (event) => {
    event.preventDefault();
    setGotMobileNo(false);
  };

  const handleResendOTP = (event) => {
    event.preventDefault();
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     throw err;
    //   });
  };

  const handleSubmitOTP = (event) => {
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
      <form id="OTPForm">
        {!gotMobileNo && (
          <div className="container">
            <img className="police-cap-img" src="./assets/police-cap.png" />
            <div className="title">Enter Mobile Number</div>
            <div className="label-input">
              <label htmlFor="mob-no" className="label">
                Enter Aadhaar or Non-Aadhaar Mobile No.
              </label>
              <input
                id="mob-no"
                className="input"
                type="number"
                name="mob-no"
                placeholder="Mobile No"
                maxLength="10"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <input
              className="button"
              type="submit"
              value="Get Otp"
              onClick={handleMobileNo}
            />
          </div>
        )}

        {gotMobileNo && (
          <div className="container">
            <img className="police-cap-img" src="./assets/police-cap.png" />
            <div className="title">Enter OTP</div>
            <div className="label-input">
              <label htmlFor="otp" className="label">
                Enter Otp sent on mobile no. 8200357641
              </label>
              <input
                id="otp"
                className="input"
                type="number"
                name="otp"
                placeholder="Enter OTP"
                maxLength="6"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                required
              />
            </div>
            <input
              className="button"
              type="submit"
              value="Submit OTP"
              onClick={handleSubmitOTP}
            />
            <div className="OTP-link">
              <a className="OTP-link" onClick={handleResendOTP}>
                Resend OTP
              </a>
              <a className="OTP-link" onClick={handleChangeMobileNo}>
                Change Mobile No.
              </a>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default UserOtp;
