import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const registerUserUrl = "https://backend-proyecto-final-production-0311.up.railway.app/user";

  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auxPassword, setAuxPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const token = localStorage.getItem("tk");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const validateEmailFormat = emailRegEx.test(email);
    const validatePasswordFormat = pwdRegEx.test(password);

    if (!first_name || !last_name || !email || !password || !auxPassword) {
      setErrMsg("All the fields are required ");
    }

    if (!validateEmailFormat || !validatePasswordFormat) {
      setErrMsg("The password or the email are not valid");
      return;
    }
    if (password !== auxPassword) {
      setErrMsg("the passwords are not the same");
      return;
    }
    try {
        console.log('intenta el try')
      const response = await axios.post(
        registerUserUrl,
        { email, password, first_name, last_name },
        { headers: { Authorization: token } }
      );
      if (response.status === 200) {
        navigate("/summary")
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAuxPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div class=" col d-flex align-items-center justify-content-center bg-image bg-secondary">
    <form onSubmit={handleSubmit}>
        <div class="card text-center m-5" style={{ maxWidth: "800px" }}>
          <div class="card-body m-5 px-5">
            <h5 class="card-title text-uppercase text-center mb-5">
              Add New Teammate
            </h5>
            <div class="row g-2">
              <div class="col-md mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGridFirstname"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label for="floatingInputGridFirstname">Nombre</label>
                </div>
              </div>
              <div class="col-md mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGridLastName"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label for="floatingInputGridLastName">Apellido</label>
                </div>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Ingresa tu contraseña</label>
              <small id="emailHelp" class="form-text text-muted fs-6 ">
                {" "}
                <strong>
                  contraseña debe ser alfanumerica y contener al menos una
                  mayuscula
                </strong>{" "}
              </small>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Repeat your password"
                onChange={(e) => setAuxPassword(e.target.value)}
              />
              <label for="floatingPassword">Repite tu contraseña</label>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="fw-bold btn btn-primary btn-lg mb-3">
                Register
              </button>
            </div>
            {errMsg && <div className="alert alert-danger">{errMsg}</div>}
          </div>
        </div>
    </form>
    </div>
  );
};
export default RegisterForm;