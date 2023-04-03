import "./App.css";
import './index.css';
import HomePage from "./views/landingPage/HomePage"
import Faq from "./views/faq/FAQ";
import AboutUsPage from "./views/aboutUs/AboutUsPage";
import Features from "./views/features/Features";
import Summary from "./views/dashboard/Summary";
import RegisterUserPage from "./views/user/RegisterFormUser"
import RegisterStorePage from "./views/store/RegisterFormStore"
import AuthContexProvider from "./context/AuthContextProvider";
import ChartProvider from "./context/ChartContext";
import Profile from "./components/common/navbar/Profile" ;
import RegisterFormUser from "./views/user/RegisterFormUser";
import Dashboard from "./views/dashboard/Dashboard";
import PrivateRoutes from "./helpers/PrivateRoutes";
import TeamList from "./views/user/TeamList"

import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";
import LandingPageLayout from "./components/layout/LandingPageLayout";

function App() {
 
  return (
    <AuthContexProvider>
      <ChartProvider>

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/summary" element={< DashboardLayout><Summary/></ DashboardLayout>} />
              <Route path="/dashboard/:chartId" element={< DashboardLayout><Dashboard/></ DashboardLayout>} />
              <Route path="/profile" element={< DashboardLayout><Profile/></ DashboardLayout>} />
              <Route path="/register-user" element={< DashboardLayout><RegisterFormUser/></ DashboardLayout>} />
              <Route path="/team-list" element={< DashboardLayout><TeamList/></ DashboardLayout>} />
            </Route>
            <Route path="/" element={<LandingPageLayout><HomePage/></LandingPageLayout>} />
            <Route path="/faq" element={<LandingPageLayout><Faq/></LandingPageLayout>} />
            <Route path="/about-us" element={<LandingPageLayout><AboutUsPage/></LandingPageLayout>} />
            <Route path="/features" element={<LandingPageLayout><Features/></LandingPageLayout>} /> 
            <Route path="/registeruser" element={<LandingPageLayout><RegisterUserPage/></LandingPageLayout>}/>
            <Route path="/register" element={<LandingPageLayout><RegisterStorePage/></LandingPageLayout>}/>  
            </Routes>
      </ChartProvider>
    </AuthContexProvider>
  );
}

export default App;
