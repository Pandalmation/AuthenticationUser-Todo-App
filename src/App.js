import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./components/Title";
import Login from "./components/Login";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Reset from "./components/Reset"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path = "/login" element={<Login />} />
          <Route exact path = "/register" element={<Register />} />
          <Route exact path = "/reset" element={<Reset />} />
          <Route exact path = "/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Title />     
    </div>
  );
}

export default App;
