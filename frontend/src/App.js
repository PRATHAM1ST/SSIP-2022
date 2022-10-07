import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import FeedbackForm from "./Pages/FeedbackForm";
import UserOtp from "./Pages/UserOtp";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserOtp/>} />
        <Route path="/form" element={<FeedbackForm title={"Bopal"} address={"Vraj Vihar Society, 33/A, S Bopal Rd, Ahmedabad, Gujarat 380058"}/>} />
        <Route path="/login" element={<AdminLogin/>} />
        <Route path="/register" element={<AdminRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
