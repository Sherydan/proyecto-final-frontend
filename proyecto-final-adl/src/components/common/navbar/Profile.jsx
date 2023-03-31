import React, { useState, useEffect } from "react";
import axios from "axios"


const Profile = () => {
  const endpoint = "http://localhost:3000/profile";
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("tk");

  useEffect (()=> {
    const getUserInfo = async () => {
      try{
        if (token) {
        const response = await axios.get(endpoint,{
          headers: { Authorization: token },
        });
         setUserInfo(response.data)
         console.log("user info",userInfo);
        }
      } catch (e){
        console.log(e);
      }
    };
    getUserInfo();
  }, []);

  return (
    <div className="col m-5 align-items-center">
      <legend className="fs-2 text-center mb-3">Profile</legend>
      <div className="row">
        <label
          htmlFor="staticFirstName"
          className="col-sm-2 col-form-label fw-bold"
        >
          First Name:
        </label>
        <div className="col">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            // value={userInfo.username.first_name}
          />
        </div>
        <label
          htmlFor="staticLastName"
          className="col-sm-2 col-form-label fw-bold"
        >
          Last Name:
        </label>
        <div className="col">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            // value={userInfo[0].username.last_name}
          />
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="inputUserRol"
          className="col-sm-2 col-form-label fw-bold"
        >
          Rol:
        </label>
        <div className="col">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            // value={userInfo[0].rol}
          />
        </div>
      </div>

      <div className="mb-3 mt-3 row">
        <label htmlFor="inputEmail" className="form-label fw-bold">
          Email:
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control-plaintext"
            id="staticEmail"
            // value={userInfo[0].email}
          />
        </div>
      </div>

      <legend className="my-2 fs-2 text-center">Store</legend>

      <div className="col-md-6">
        <label htmlFor="inputStoreName" className="form-label fw-bold">
          Store name:
        </label>
        <div className="">
          <input
            type="text"
            className="form-control-plaintext"
            id="inputStoreName"
            // value={userInfo[0].store.storeName}
          />
        </div>
      </div>

      <div className="col-md-3">
        <label htmlFor="inputRUT" className="form-label fw-bold">
          RUT:
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="inputRUT"
          // value={userInfo[0].store.rut}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputAddress" className="form-label fw-bold">
          Address:
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="inputAddress"
          // value={userInfo[0].store.address}
        />
      </div>
      <div className="col-12 my-4"></div>
    </div>
  );
};

export default Profile;
