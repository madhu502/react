// importing

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";
import Login from "./Login"; //component to be tested

// Mok API js (No sending request to real backend)

jest.mock("../../apis/Api");

// MAking test case
describe("Login Component Test", () => {
  //clearing all the mock data
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Defining test case 1
  it("Should show error message on failed login", async () => {
    // rendering login components
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    ); // built screen

    //Mocking login fail response
    const mockResponse = {
      data: {
        success: false,
        message: "Password not matched!",
      },
    };

    // config mock resolved value
    loginUserApi.mockResolvedValue(mockResponse);

    // config tha toast eror message as a test function
    toast.error = jest.fn();

    // Testig real ui components
    //1. finding email, password and login password
    const email = await screen.getByPlaceholderText("Enter Your email");
    const password = await screen.getByPlaceholderText(
      "Enter Your password"
    );
    const loginBtn = screen.getByText("Login");

    //2. simulating user input and interaction
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "test123" } });
    fireEvent.click(loginBtn);

    // we have done all setup above
    waitFor(() => {
      expect(loginUserApi).toHaveBeenCalledWith({
        email: "test@gmail.com",
        password: "test123",
      });
      expect(toast.error).toHaveBeenCalledWith('Password not matched!')
    });
    // toast error 
    
  });
});
