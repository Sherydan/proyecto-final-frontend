import { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
    
    const emailRegEx = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    const pwdRegEx = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/';
    const registerUserUrl='localhost:3002/user';

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [auxPassword, setAuxPassword]= useState("");
    const [errMsg, setErrMsg] = useState("");
    const handleSubmit = async (e) => {
   
        const validateEmailFormat = emailRegEx.test(email);
        const validatePasswordFormat = pwdRegEx.test(password);

         
        if (!firstName || !lastName || !email || !password || !auxPassword){
            setErrMsg("All the fields are required ")
         }

        if (!validateEmailFormat || !validatePasswordFormat) {
          setErrMsg("The password or the email are not valid");
          return;
        }
        if (password !== auxPassword){
            setErrMsg("the passwords are not the same");
            return;
        }
        try {
          const response = await axios.post(
            registerUserUrl,
            { firstName, lastName, email, password }
          );

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAuxPassword("");
           
        } catch (err) {
          if (!err?.response) {
            setErrMsg("No Server Response");
          }  else {
            setErrMsg("Registration Failed");
          }
        }
      };

    return (

        <div  className=" col d-flex align-items-center justify-content-center bg-image bg-secondary">
        <div className="card text-center m-5"  style={{maxWidth: '800px'}}>
            <div className="card-body m-5 px-5">
                <h5 className="card-title text-uppercase text-center mb-5">Add New Teammate</h5>
                <div className="row g-2">
                    <div className="col-md mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGridFirstname" placeholder="First name" onChange={(e)=> setFirstName(e.target.value)} />
                            <label for="floatingInputGridFirstname">Nombre</label>
                        </div>
                    </div>
                    <div className="col-md mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGridLastName" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}/>
                            <label for="floatingInputGridLastName">Apellido</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                    <label for="floatingPassword">Ingresa tu contraseña</label>
                    <small id="emailHelp" className="form-text text-muted fs-6 "> <strong>contraseña debe ser alfanumerica y contener al menos una mayuscula</strong> </small>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Repeat your password" onChange={(e)=> setAuxPassword(e.target.value)}/>
                    <label for="floatingPassword">Repite tu contraseña</label>
                </div>

                <div className="d-grid gap-2">
                    <button type="button" className="fw-bold btn btn-primary btn-lg mb-3" onClick={handleSubmit}>Register</button>
                </div>
  
            </div>
        </div>
        </div>
    );
};

export default RegisterForm;