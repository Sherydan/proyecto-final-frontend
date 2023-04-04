import React from "react";
import axios from "axios";
import checkCsvFormat from "../../helpers/checkCsvFormat";
import swal from "sweetalert";
import { useState } from "react";
import Papa from "papaparse";

const ModalSendFile = () => {

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
          .post("https://backend-proyecto-final-production-0311.up.railway.app/sales", jsonData, {headers: {Authorization: `${localStorage.getItem("tk")}`}})
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
};
  return (
    <>
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
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : null}
              {!loading && (
                <div>
                  <label htmlFor="formFileLg" className="form-label">
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
                    data-bs-dismiss="modal"
                    id="closeModal"
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
    </>
  );
};

export default ModalSendFile;
