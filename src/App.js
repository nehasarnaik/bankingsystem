import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/register" element={<RegisterPage />} />
          {/*Should add login component*/}
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/dashboard" element={<Dashboard id="9"></Dashboard>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
