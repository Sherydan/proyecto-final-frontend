import "./App.css";
import HomePage from "./views/HomePage";
import Faq from "./views/FAQ";
import AboutUs from "./views/AboutUs";
import Features from "./views/Features";
import Gallery from "./views/Gallery";
import RegisterGeneralPage from "./views/RegisterGeneralPage";
import RegisterUserPage from "./views/RegisterUserPage";
import RegisterStorePage from "./views/RegisterStorePage";
import AuthContexProvider from "./context/AuthContextProvider";
import ChartProvider from "./context/ChartContext";
import { Routes, Route } from "react-router-dom";
import './index.css';
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard"
import LayoutPublic from "./components/layout/LayoutPublic";

function App() {
    return (
        <AuthContexProvider>
            <ChartProvider>

                <Routes>
                    <Route path="/faq" element={<LayoutPublic><Faq/></LayoutPublic>} />
                    <Route path="/about-us" element={<LayoutPublic><AboutUs/></LayoutPublic>} />
                    <Route path="/features" element={<LayoutPublic><Features/></LayoutPublic>} />
                    <Route path="/" element={<LayoutPublic><HomePage/></LayoutPublic>} />
                    <Route path="/register" element={<LayoutPublic><RegisterGeneralPage /></LayoutPublic>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/dashboard/:chartId" element={<Dashboard />} />
                    <Route path="/registeruser"element={<RegisterUserPage />}/>
                    <Route path="/registerstore"element={<RegisterStorePage />}/>
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard/:chartId" element={<Dashboard />} />
                </Routes>

            </ChartProvider>
        </AuthContexProvider>
    );
}

export default App;
