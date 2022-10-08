import { useState } from "react";
import "../Pages Css/UserOtp.css";

const UserOtp = () => {
  const [gotMobileNo, setGotMobileNo] = useState(false);
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");

  const handleMobileNo = (event) => {
    event.preventDefault();
    if(mobile.length !== 10){
      return
    }
    fetch("http://127.0.0.1:3001/mobile", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        mobile: mobile,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setGotMobileNo(true);
        }
      })
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
    fetch("http://127.0.0.1:3001/mobile", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        mobile: mobile,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        throw err;
      });
  };

  const handleSubmitOTP = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:3001/check-otp", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        otp: OTP,
      }),
    })
      .then((res) => {
        if(res.ok){
          window.location.replace("/form")
        }
      })
      .then((data) => console.log(data))
      .catch((err) => {
        throw err;
      });
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
                type="text"
                name="mob-no"
                placeholder="Mobile No"
                value={mobile}
                onChange={(e) => {
                  if (
                    e.target.value.length <= 10 &&
                    /[0-9]/.test(e.target.value)
                  ) {
                    setMobile(e.target.value);
                  }
                }}
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
                Enter Otp sent on mobile no. {mobile}
              </label>
              <input
                id="otp"
                className="input"
                type="text"
                name="otp"
                placeholder="Enter OTP"
                maxLength="6"
                value={OTP}
                onChange={(e) => {
                  if (e.target.value.length <= 6 && /[0-9]/.test(e.target.value)) {
                    setOTP(e.target.value);
                  }
                }}
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
