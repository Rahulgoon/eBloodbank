import React, { useState } from "react";
import axios from "axios";

const uploadData = (user) => {
  axios
    .post("http://127.0.0.1:8001/v1/api/signup", user)
    .then((res) => alert(res.data))
    .catch((err) => alert(err.message));
};
export const Signup = () => {
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
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            User Email
          </label>
          <input
            placeholder="abc@gmail.com"
            type="email"
            className="form-control"
            onChange={handleInput}
            name="email"
            value={user.email}
            id="inputEmail4"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            User Password
          </label>
          <input
            minLength={10}
            placeholder="********"
            type={show ? "text" : "password"}
            className="form-control"
            onChange={handleInput}
            name="password"
            value={user.password}
            id="inputPassword4"
          />
          <label id="show" className="form-check-label" htmlFor="gridCheck">
            Show Password
            <input type="checkbox" onChange={() => setShow((prev) => !prev)} />
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
