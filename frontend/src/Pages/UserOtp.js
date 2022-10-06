import { useState } from "react";

const UserOtp = () => {
  const [gotMobileNo, setGotMobileNo] = useState(false);
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");

  const handleMobileNo = (event) => {
    event.preventDefault();
    setGotMobileNo(true);
  };

  const handleChangeMobileNo = (event) => {
    event.preventDefault();
    setMobile(false);
  };

  const handleResendOTP = (event) => {
    event.preventDefault();
  };

  const handleSubmitOTP = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="m-5">
        {!gotMobileNo && (
          <div className="mb-3">
            <label htmlFor="mob-no" className="form-label">
              Enter Mobile No.
            </label>
            <input
              id="mob-no"
              className="form-control"
              type="number"
              name="mob-no"
              placeholder="Mobile No"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        )}

        {gotMobileNo && (
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              Enter OTP
            </label>
            <input
              id="otp"
              className="form-control"
              type="number"
              name="otp"
              placeholder="Enter OTP"
              maxLength="6"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
          </div>
        )}
        {!gotMobileNo && (
          <input
            className="btn btn-primary"
            type="submit"
            value="Get Otp"
            onClick={handleMobileNo}
          />
        )}
        {gotMobileNo && (
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit OTP"
              onClick={handleSubmitOTP}
            />
            <input
              className="btn btn-link"
              type="submit"
              value="Resend OTP"
              onClick={handleResendOTP}
            />
            <input
              className="btn btn-link"
              type="submit"
              value="Change Mobile No."
              onClick={handleChangeMobileNo}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default UserOtp;
