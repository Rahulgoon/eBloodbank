import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const [luser, setLuser] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLuser({ ...luser, [name]: value });
  };
  const handleSubmitLog = (e) => {
    e.preventDefault();
    if(luser.email==="ebloodbank@admin.com" && luser.password==='admin@1234'){
         setTimeout(()=>{
          navigate('/dashboard')
         },1200)
    }else{ 
      logFunc(luser);
    }
  };

  const logFunc = async (data) => {
   // console.log(data);
    try {
      let res = await axios.post("http://127.0.0.1:8001/v1/api/login", data);
      //console.log(res.data);
      alert(res.data.message);
      localStorage.setItem("Token", res.data.token);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmitLog}>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            User Email
          </label>
          <input
            onChange={handleInput}
            placeholder="rg97531@gmail.com"
            type="email"
            className="form-control"
            id="inputEmail4"
            value={luser.email}
            name="email"
            required

          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            User Password
          </label>
          <input
            onChange={handleInput}
            minLength={10}
            placeholder="********"
            type={show ? "text" : "password"}
            className="form-control"
            id="inputPassword4"
            value={luser.password}
            name="password"
            required
          />
          <label id="show" className="form-check-label" htmlFor="gridCheck">
            <input type="checkbox" onChange={() => setShow((prev) => !prev)} />
            Show Password
          </label>
        </div>
        <div className="col-12"></div>
        <div className="col-12">
          <input type="submit" value="Log In" className="btn btn-danger" />
        </div>

        <h6>
          Don't have account ?{" "}
          <a href="/signup">
            <span>Create an account</span>
          </a>
        </h6>
      </form>
    </>
  );
};
