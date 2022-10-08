import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import FeedbackForm from "./Pages/FeedbackForm";
import NotScaned from "./Pages/NotScaned";
import UserOtp from "./Pages/UserOtp";
import Thankyou from "./Pages/Thankyou";
import Dashboard from "./Pages/Dashboard";
import QRGenerator from "./Pages/QRGenerator";
import DashboardFeedback from "./Pages/DashboardFeedback";
import ModifyStation from "./Pages/ModifyStation";
import ModifyOfficer from "./Pages/ModifyOfficer";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  
  // let query = useQuery();
  
  // if (query) {
  //   localStorage.setItem("staion", query);
  //   window.history.pushState(null, "", window.location.href.split("?")[0]);
  // }

  return (
    <div className="App">
      <Navbar />
      {localStorage.getItem("staion") && (
        <Routes>
          <Route path="/" element={<UserOtp />} />
          <Route
            path="/form"
            element={
              <FeedbackForm
                title={"Bopal"}
                address={
                  "Vraj Vihar Society, 33/A, S Bopal Rd, Ahmedabad, Gujarat 380058"
                }
              />
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/thanks" element={<Thankyou />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/feedback" element={<DashboardFeedback />} />
          <Route path="/dashboard/qr" element={<QRGenerator />} />
          <Route path="/dashboard/officer" element={<ModifyOfficer />} />
          <Route path="/dashboard/station" element={<ModifyStation />} />
        </Routes>
      )}
      {!localStorage.getItem("staion") && <NotScaned />}
    </div>
  );
}

export default App;
