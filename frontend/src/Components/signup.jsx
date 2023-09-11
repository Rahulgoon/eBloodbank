import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const uploadData = (user) => {
  axios
    .post("http://127.0.0.1:8001/v1/api/signup", user)
    .then((res) => alert(res.data))
    .catch((err) => alert(err.message));
};

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  //console.log(user)
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSign = (e) => {
    e.preventDefault();
    uploadData(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
    setTimeout(() => {
      navigate("/login");
    }, 1200)
  };
  return (
    <>
      <form onSubmit={handleSign} className="row g-3">
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
            User Name
          </label>
          <input
            placeholder="Name"
            type="text"
            className="form-control"
            id="inputName4"
            onChange={handleInput}
            name="name"
            value={user.name}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            User Email
          </label>
          <input
            placeholder="rg97531@gmail.com"
            type="email"
            className="form-control"
            onChange={handleInput}
            name="email"
            value={user.email}
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            User Password
          </label>
          <input
            minLength={10}
            placeholder="********"
            className="form-control"
            onChange={handleInput}
            name="password"
            value={user.password}
            id="inputPassword4"
            type={show ? "text" : "password"}
            required
          />
          <label id="show" className="form-check-label" htmlFor="gridCheck">
            <input type="checkbox" onChange={() => setShow((prev) => !prev)} />
            Show Password
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-danger">
            Sign Up
          </button>
        </div>
        <h6>
          Already Signed Up ?{" "}
          <a href="/login">
            <span>LOG IN</span>
          </a>
        </h6>
      </form>
    </>
  );
};
