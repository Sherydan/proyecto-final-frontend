import React from "react";
import { ChartContext } from "../context/ChartContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import checkCsvFormat from "../helpers/checkCsvFormat";
import swal from "sweetalert";
import { useState } from "react";
import Papa from "papaparse";

// import team from "../assets/img/group.png";
// import dashboard from "../assets/img/analysis.png";
// import addFile from "../assets/img/new-document.png";
export default function Menu() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        // check if file is empty
        if (event.target.files[0] === null) {
            return;
        }
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (file === null) {
                swal({
                    title: "Error",
                    text: "Please select a file",
                    icon: "error",
                    button: "Ok",
                });
                setLoading(false);
                return;
            }
            const csv = await convertToCSV(file);
            const jsonData = await convertToJSON(csv);
            // check formart
            if (!checkCsvFormat(csv)) {
                swal({
                    title: "Error",
                    text: "Please select a csv file in the correct format",
                    icon: "error",
                    button: "Ok",
                });
                setLoading(false);
                return;
            }
            await sendData(jsonData);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        setFile(null);

        // close modal after sending data

        
    };

    const convertToCSV = (file) => {
        // check if file is empty
        if (file === null) {
            return;
        }

        // check if file is csv
        if (file.type !== "text/csv") {
            swal({
                title: "Error",
                text: "Please select a csv file",
                icon: "error",
                button: "Ok",
            });
            return;
        }

        try {
            return new Promise((resolve, reject) => {
                Papa.parse(file, {
                    complete: (results) => {
                        resolve(results.data);
                        console.log(results.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    const convertToJSON = (csv) => {
        //check if csv is empty
        if (csv.length === 0) {
            return;
        }
        try {
            const headers = csv[0];
            const jsonData = [];

            for (let i = 1; i < csv.length; i++) {
                const row = csv[i];
                const obj = {};

                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = row[j];
                }

                jsonData.push(obj);
            }
            // delete last row because its full of undefined values
            jsonData.pop();

            return jsonData;
        } catch (error) {
            console.log(error);
        }
    };

    // send data function

    const sendData = async (jsonData) => {
        let sendingError = false;
        try {
            await axios
                .post("http://localhost:3000/sales", jsonData)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    swal({
                        title: "Error",
                        text: "Error while uploading data",
                        icon: "error",
                        button: "Ok",
                    });
                    console.log(error);
                    sendingError = true;
                });
        } catch (error) {
            console.log(error);
        }

        if (!sendingError) {
            swal({
                title: "Success",
                text: "Data uploaded successfully",
                icon: "success",
                button: "Ok",
            });
        } else {
            swal({
                title: "Error",
                text: "Error while uploading data",
                icon: "error",
                button: "Ok",
            });
        }

        // close modal after sending data
        // x = e => { document.getElementById('closeModal').click() }
    };

    const { charts } = React.useContext(ChartContext);
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
    return (
        
        <>
            <div className="d-flex felx-column justify-content-between col-auto bg-dark min-vh-100">
                <div
                    className=""
                    style={{ minWidth: "6rem", maxWidth: "10rem" }}
                >
                    <ul
                        className="nav nav-pills flex-column mt-2 mt-ms-0"
                        id="menu"
                    >
                        {/*ruta a las vista previa de los graficos */}

                        {/*ruta a los detalles de cada grafico */}
                        <li className="nav-item disable my-ms-1 my-2">
                            <a
                                className="nav-link text-white"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse"
                                aria-current="page"
                                // posible error aqui
                                href="/"
                            >
                                <i
                                    class="fa-solid fa-chart-pie"
                                    style={{ color: " #ffffff" }}
                                ></i>
                                <span className="ms-2 d-none d-sm-inline">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <ul
                            className="nav collapse ms-1 flex-column"
                            id="dashboard-collapse"
                        >
                            {charts[0]?.data?.labels?.length !== 0 ? (
                                charts.map((chart) => (
                                    <li key={chart.id} className="nav-item">
                                        <NavLink
                                            to={`/dashboard/${chart.id}`}
                                            className={`nav-link text-white ${setActiveClass}`}
                                        >
                                            <i
                                                class="fa-regular fa-chart-bar"
                                                style={{ color: " #ffffff" }}
                                            ></i>
                                            {chart.title}
                                        </NavLink>
                                    </li>
                                ))
                            ) : (
                                <li>
                                    <a
                                        href="/"
                                        className="d-inline-flex text-decoration-none text-white rounded"
                                    >
                                        No charts yet
                                    </a>
                                </li>
                            )}
                        </ul>
                        {/*ruta a las funciones de Usuarios*/}
                        <li className="nav-item disable my-ms-1 my-2">
                            <a
                                href="#sidemenu"
                                data-bs-toggle="collapse"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <i
                                    class="fa-solid fa-people-group"
                                    style={{ color: " #ffffff" }}
                                ></i>
                                <span className="ms-2 d-none d-sm-inline">
                                    Team
                                </span>
                            </a>
                        </li>
                        <ul
                            className="nav collapse ms-1 flex-column"
                            id="sidemenu"
                            data-bs-parent="menu"
                        >
                            <li className="nav-item">
                                <a
                                    href="/team-list"
                                    className="nav-link text-white"
                                    aria-current="page"
                                >
                                    <i
                                        class="fa-solid fa-list"
                                        style={{ color: " #ffffff" }}
                                    ></i>
                                    <span className="ms-2 d-none d-sm-inline">
                                        Team List
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/register-user"
                                    className="nav-link text-white"
                                >
                                    <i
                                        class="fa-solid fa-user-plus"
                                        style={{ color: " #ffffff" }}
                                    ></i>
                                    <span className="ms-2 d-none d-sm-inline">
                                        Add user
                                    </span>
                                </a>
                            </li>
                        </ul>
                        {/*ruta en caso de necesitar algo mas*/}

                        {/* <li className="nav-item disable my-ms-1 my-2">
                  <a href="#addFile" data-bs-toggle="collapse" className="nav-link text-white" aria-current="page">
                  <i class="fa-solid fa-file-circle-plus" style={{color:" #ffffff"}}></i>
                    <span className="ms-2 d-none d-sm-inline">
                    
                    add File</span>
                  </a>
                </li> */}

                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >
                            Add Sales
                        </button>
                    </ul>
                </div>
            </div>

            {/* MODAL INICIO */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Add sales
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mx-auto">
                            {loading ? (
                                <div
                                    className="spinner-border text-primary"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : null}
                            {!loading && (
                                <div>
                                    <label
                                        htmlFor="formFileLg"
                                        className="form-label"
                                    >
                                        Large file input example
                                    </label>
                                    <input
                                        className="form-control form-control-lg"
                                        id="formFileLg"
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            {loading && null}
                            {!loading && (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        id="closeModal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                    >
                                        Send Sales
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL FIN */}
        </>
    );
}
