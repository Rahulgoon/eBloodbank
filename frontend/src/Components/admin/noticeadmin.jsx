import React, { useState } from "react";
import axios from "axios";

const noticeData = (user) => {
  axios
    .post("http://127.0.0.1:8001/v1/api/notice", user)
    .then((res) => alert(res.data))
    .catch((err) => alert(err.message));
};

export const NoticeAdmin = () => {
  const [notice,setNotice] = useState({
    date:"",
    title: "",
    content: ""
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  };
  const handleSign = (e) => {
    e.preventDefault();
    noticeData(notice)
    setNotice({
    date:"",
    title: "",
    content: ""
    });
  };

  return (
    <>
         <div className="dashboard">
        <div className="navdashboard">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useradmin">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donoradmin">
                Donor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookadmin">
                Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactadmin">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/noticeadmin">
                Notice
              </a>
            </li>
          </ul>
          </div>
      <form className="noticeadminn"  onSubmit={handleSign}>
        <div className="mb-3">
          <label htmlFor="dateInput" className="form-control">
            Date & Time
          </label>
          <input type="datetime-local" className="form-control" 
          name="date"
          value={notice.date}
          onChange={handleInput} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-control">
           Notice Title
          </label>
          <input
            type="text"
            placeholder="notice title"
            className="form-control"
            name="title"
          value={notice.title}
          onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-control">
            Notice Content
          </label>
          <textarea
            placeholder="write notice here"
            id=""
            cols="20"
            rows="5"
            className="form-control"
            name="content"
          value={notice.content}
          onChange={handleInput}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-danger">
          Proceed
        </button>
      </form>
      </div>
    </>
  );
};
