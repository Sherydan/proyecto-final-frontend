import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import React from "react";
import userImg from "../../../assets/img/user.png"
import logo from "../../../assets/img/pie-chart.png"
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("tk");
    setIsAuth(false);
    navigate("/");
    };
    const userName = localStorage.getItem("userName");
  const { isAuth, setIsAuth } = React.useContext(AuthContex);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top  ">
        <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <h1>
          <img src={logo} alt="" width="32" height="32" className="rounded-circle me-2" />SalesMetrics</h1>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Private navbar links */}
            {isAuth && (
          <>
          <li className="nav-item mx-2">
          <NavLink className="nav-link text-decoration-none text-white"
            to="/summary">
            Summary
          </NavLink>
          </li>
          {/* log out button */}
          <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link text-white text-decoration-none dropdown-toggle" href="/ " data-bs-toggle="dropdown" aria-expanded="false">
          <img src={userImg} alt="" width="32" height="32" className="rounded-circle me-2" />
            {userName}
            </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a onClick={logout} className="dropdown-item" href="/">Log Out</a></li>
              </ul>
            </div>    
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
              end>
                Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/features">
                Features
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                id="navbar-total"
                to="/faq">
                  FAQ
              </NavLink>
            </li>
        </>
          )}

          {/* Public navbar links */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
