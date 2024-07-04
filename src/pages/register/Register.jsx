import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/Api";

const Register = () => {
  //Logic section

  // Make a useState for 5 fields
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  // UseState for error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Make functions for each changing the values

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  //validation
  var validate = () => {
    var isValid = true;

    // validate the first name
    if (firstname.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }

    // validate the last name
    if (lastname.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }

    // validate the email
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    }

    // validate the password
    if (password.trim() === "") {
      setPasswordError("password is required");
      isValid = false;
    }

    // validate the confirm password
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    }
    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and confirm password doesnot match");
      isValid = false;
    }
    return isValid;
  };
  //Submit button function
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    // sending request to the api

    //Making json object
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      phone: phone,
    };

    registerUserApi(data).then((res) => {
      // Received Data: success, message

      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };
  return (
    <>
      <div className="container mt-2">
        <h1>Create an Account!</h1>
        <form className="w-50">
          <label>Firstname :{firstname} </label>
          <input
            onChange={handleFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
          {firstNameError && <p className="text-danger">{firstNameError}</p>}

          <label className="mt-2">Lastname : {lastname}</label>
          <input
            onChange={handleLastname}
            type="text"
            className="form-control"
            placeholder="Enter your last name"
          />
          {lastNameError && <p className="text-danger">{lastNameError}</p>}
          <label className="mt-2">Email : {email}</label>
          <input
            onChange={handleEmail}
            type="text"
            className="form-control"
            placeholder="Enter your email"
          />
          {emailError && <p className="text-danger">{emailError}</p>}

          <label className="mt-2">Phone Number : {phone}</label>
          <input
            onChange={handlePhone}
            type="text"
            className="form-control"
            placeholder="Enter your phone number"
          />
          {phoneError && <p className="text-danger">{phoneError}</p>}

          <label className="mt-2">Password :{password} </label>
          <input
            onChange={handlePassword}
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
          <label className="mt-2">Confirm Password:{confirmPassword} </label>
          <input
            onChange={handleConfirmPassword}
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          {confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p>
          )}
          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
            Create an account
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;

// Step 1: Make a complete ui of register page (fields, button,etc)
// Step 2: Input  (type) - Make a state
// Step 3: Onchange - Set the value to the state
