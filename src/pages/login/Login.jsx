import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";

const Login = () => {
  // make a usestate for each input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Make a error state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation
  const validation = () => {
    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  //Make a function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault();

    //validation
    if (!validation()) {
      return;
    }

    //make a json object
    const data = {
      email: email,
      password: password,
    };
    //Make a api request
    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        // Success(bool), message(text), token(text) ,user data(json object)

        //Setting token and user data in local storage
        localStorage.setItem("token", res.data.token);

        //Setting user data
        const convertedData = JSON.stringify(res.data.userData);

        //local storage set
        localStorage.setItem("user", convertedData);
      }
    });

    // toast.success("Login button clicked!")
  };

  return (
    <div className="container">
      <h1>Login to your account</h1>

      <form className="w-50">
        <label>Email Address {email}</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Your email"
        />
        {emailError && <p className="text-danger">{emailError}</p>}

        <label>Password {password}</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter Your password"
        />
        {passwordError && <p className="text-danger">{passwordError}</p>}

        <button onClick={handleLogin} className="btn btn-danger mt-2 w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
