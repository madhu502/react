import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

//Toast Cinfig

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StopWatch from "./pages/StopWatch";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateProduct from "./pages/admin/update_product/UpdateProduct";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import Profile from "./pages/profile/Profile";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<StopWatch />} />

        {/* Admin*/}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>

        {/* User Routes*/}
        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/forgot_password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
