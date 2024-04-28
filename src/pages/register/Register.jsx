import React from "react";

const Register = () => {
  return (
    <>
      <div className="container mt-2">
        <h1>Create an Account!</h1>
        <form className="w-50">
          <label>Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
          <label className="mt-2">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
          />
          <label className="mt-2">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
          />
          <label className="mt-2">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          <label className="mt-2">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          <button className="btn btn-dark mt-2 w-100">Create an account</button>
        </form>
      </div>
    </>
  );
};

export default Register;

// Step 1: Make a complete ui of register page (fields, button,etc)
// Step 2: Input  (type) - Make a state
// Step 3: Onchange - Set the value to the state
