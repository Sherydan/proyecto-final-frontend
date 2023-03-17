import React from "react";
import { ChartContext } from "../context/ChartContext";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const {isAuth, setIsAuth}=AuthContex;
    const navigate = useNavigate;
    const { charts } = React.useContext(ChartContext)
    const logout = () => {
      localStorage.removeItem("tk");
      setIsAuth(false);
      navigate("/");
    };

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
    return (
    <div className="col-lg-2 col-md-3 d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-sticky position-sticky min-vh-100">
          <div className="dropdown">
      <a href="/profile" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="/profile">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/" onClick={logout}>Sign out</a></li>
      </ul>
    </div>    
    <hr/>
  
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/gallery" className={`nav-link text-white ${setActiveClass}`}>
          Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <button className="btn btn-toggle d-inline-flex text-white nav-link align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
            <li key={chart.id}><NavLink to={`/dashboard/${chart.id}`} className= {`nav-link text-white ${setActiveClass}`}>
              {chart.title}
              </NavLink>
              </li>
          ))
          : <li><a href="/" className="d-inline-flex text-decoration-none text-white rounded">No charts yet</a></li>
          }
          </ul>
        </div>
      </li>
    </ul>
    </div>
    )
}