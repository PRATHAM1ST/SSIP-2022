import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import FeedbackForm from "./Pages/FeedbackForm";
import UserOtp from "./Pages/UserOtp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserOtp/>} />
        <Route path="/form" element={<FeedbackForm/>} />
        <Route path="/login" element={<AdminLogin/>} />
        <Route path="/register" element={<AdminRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
