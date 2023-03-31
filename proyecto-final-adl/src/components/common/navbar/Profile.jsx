import React, { useState, useEffect } from "react";
import axios from "axios"


const Profile = () => {
  const endpoint = "https://backend-proyecto-final-production-0311.up.railway.app/profile";
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
         
        }
      } catch (e){
        console.log(e);
      }
    };
    getUserInfo();
  }, [token]);
console.log("user info",userInfo);
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
          <p>{userInfo[0]?.first_name}</p>
        </div>
        <label
          htmlFor="staticLastName"
          className="col-sm-2 col-form-label fw-bold"
        >
          Last Name:
        </label>
        <div className="col">
          <p>{userInfo[0]?.last_name}</p>
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="inputUserRol"
          className="col-sm-2 col-form-label fw-bold"
        >
          Role:
        </label>
        <div className="col">
        <p>{userInfo[0]?.role}</p>
        </div>
      </div>

      <div className="mb-3 mt-3 row">
        <label htmlFor="inputEmail" className="form-label fw-bold">
          Email:
        </label>
        <div className="col-sm-10">
        <p>{userInfo[0]?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
