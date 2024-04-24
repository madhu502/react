import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<h1>Register Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
