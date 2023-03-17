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
import Profile from "./components/Profie";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard"
import PrivateRoutes from "./helpers/PrivateRoutes";


function App() {
    return (
        <AuthContexProvider>
            <ChartProvider>
                <Navbar />

                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/dashboard/:chartId" element={<Dashboard />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterGeneralPage />} />
                    
                    
                    <Route
                        path="/registeruser"
                        element={<RegisterUserPage />}
                    />
                    <Route
                        path="/registerstore"
                        element={<RegisterStorePage />}
                    />
                    
                </Routes>
                <Footer />
            </ChartProvider>
        </AuthContexProvider>
    );
}

export default App;
