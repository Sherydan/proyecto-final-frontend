import React from "react";
import axios from "axios";
import { AuthContex } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const HeroLogin = () => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { setIsAuth } = React.useContext(AuthContex);

    const navigate = useNavigate();

    const login = async () => {
        try {
            const accessuser = await axios.post("http://localhost:3001/login", {
                email: userName,
                password: password,
            });

            swal({
                title: "Success",
                text: "You are logged in",
                icon: "success",
                button: "Ok",
            })
            setTimeout(() => {
                swal.close();
            }, 2000);

            localStorage.setItem("tk", accessuser.data.token)
            setIsAuth(true);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            swal({
                title: "Error",
                text: "Invalid credentials",
                icon: "error",
                button: "Ok",
            });


        }
    };

    return (
        <div id="hero-login" className="container col-xl-10 col-xxl-8">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">
                        Vertically centered hero sign-up form
                    </h1>
                    <p className="col-lg-10 fs-4">
                        Below is an example form built entirely with Bootstrap’s
                        form controls. Each required form group has a validation
                        state that can be triggered by attempting to submit the
                        form without completing it.
                    </p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" />{" "}
                                Remember me
                            </label>
                        </div>
                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit"
                            onClick={login}
                        >
                            Sign in
                        </button>
                        <hr className="my-4"/>
                        <a class=" w-100 btn btn btn-lg btn-outline-success" href="/register" role="button">Register</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroLogin;
