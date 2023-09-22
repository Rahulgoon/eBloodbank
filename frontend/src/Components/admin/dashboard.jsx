import React, { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {

  const [user,setUser] = useState([]);
  const [donor,setDonor] = useState([]);
  const [contact,setContact] = useState([]);

  const getUser = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8001/v1/api/signup")
        //console.log(response.data);
        setUser(response.data.User);
    } catch (error) {
        console.log(error.message);
    }
};

  const getDonor = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8001/v1/api/donate")
        //console.log(response.data);
        setDonor(response.data);
    } catch (error) {
        console.log(error.message);
    }
};

const getContact = async () => {
  try {
      const response = await axios.get("http://127.0.0.1:8001/v1/api/contact")
      //console.log(response.data);
      setContact(response.data.Contact);
  } catch (error) {
      console.log(error.message);
  }
};

useEffect(() => {
  getDonor();
  getUser();
  getContact()
},[]);

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
          <div className="tabdashboard">
              <div className="dashboard-btn">
                <a href="/">
                  <button className="btn">Home</button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="">
                  <button className="btn">Total Donor
                  <h3>{donor.length}+</h3>
                  </button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="">
                  <button className="btn">Total Users
                  <h3>{user.length}+</h3>
                  </button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="">
                  <button className="btn">Total Contacts
                  <h3>{contact.length}+</h3>
                  </button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="/useradmin">
                  <button className="btn">Users</button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="/donoradmin">
                  <button className="btn">Donors</button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="/contactadmin">
                  <button className="btn">Booked</button>
                </a>
            </div>
            <div className="dashboard-btn">
                <a href="/noticeadmin">
                  <button className="btn">Notices</button>
                </a>
            </div>
          </div>
        </div>
    </>
  );
};