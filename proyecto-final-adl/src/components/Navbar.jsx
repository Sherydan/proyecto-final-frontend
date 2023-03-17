import { NavLink } from "react-router-dom";
import { AuthContex } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import React from "react";
const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("tk");
        setIsAuth(false);
        navigate("/");
      };

    const { isAuth, setIsAuth } = React.useContext(AuthContex);
    return (
        <> {isAuth ? <></> :
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h1>Logo</h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Private navbar links */}
                            {isAuth && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/dashboard"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/gallery"
                                        >
                                            Gallery
                                        </NavLink>
                                    </li>


                           {/* log out button */}
                           <li  className="nav-item">
                                        <a onClick={logout} className="nav-link" href="/">
                                            Log Out
                                        </a>
                                    </li>
                                </>
                            )}

                            {/* End private navbar links */}

                            {/* Public navbar links */}

                            {!isAuth && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            end
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/about-us"
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/features"
                                        >
                                            Features
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pricing">
                                            Pricing
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            id="navbar-total"
                                            to="/faq"
                                        >
                                            FAQ
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {/* Public navbar links */}
                        </ul>
                    </div>
                    <div className="d-flex"></div>
                </div>
            </nav>
             }
        </>
    );
};

export default Navbar;
