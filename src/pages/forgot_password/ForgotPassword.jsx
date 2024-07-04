import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgotPasswordApi, verifyOtpApi } from "../../apis/Api";

const ForgotPassword = () => {
  // make a state
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  //send otp function
  const handleSendOtp = (e) => {
    e.preventDefault();

    //api call
    forgotPasswordApi({ phone })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          setIsSent(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || 500) {
          toast.error(error.response.data.message);
        }
      });
  };
  // verify otp and set password
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const data = {
      phone: phone,
      otp: otp,
      newPassword: newPassword,
    };
    //api call
    verifyOtpApi(data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || 500) {
          toast.error(error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="container mt-3">
        <h3>Forgot Password!</h3>
        <form className="w-25">
          <span className="d-flex">
            <h4>+977</h4>
            <input
              disabled={isSent}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </span>
          <button
            disabled={isSent}
            onClick={handleSendOtp}
            className="btn btn-dark mt-2 w-100"
          >
            {" "}
            Send OTP
          </button>
          {isSent && (
            <>
              <hr />
              <p>OTP has been sent to {phone} ✅ </p>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Enter valid OTP code!"
              />
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="text"
                className="form-control mt-3"
                placeholder="Set new password"
              />
              <button
                onClick={handleVerifyOtp}
                className="btn btn-primary w-100 mt-3"
              >
                Verify OTP & Set Password
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
