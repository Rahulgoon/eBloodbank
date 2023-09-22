import React,{ useState, useEffect } from "react";
import axios from "axios";

export const ContactAdmin = () => {

  const [data,setData] = useState([]);

  const getData = async () => {
      try {
          const response = await axios.get("http://127.0.0.1:8001/v1/api/contact")
          //console.log(response.data);
          setData(response.data.Contact);
      } catch (error) {
          console.log(error.message);
      }
  };
  
  useEffect(() => {
      getData()
  },[]);
//console.log(data);
  return (
    <>
      <div className="admin">
        <div className="navadmin">
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
        <div>
        <h2 style={{textAlign:"center",color:"red"}}>Contacts Details</h2>
          <br />
          <div className="tablescroller">
          <table className="donortable">
            <thead>
              <tr>
                <th scope="col">Contact Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            {data && Array.isArray(data) && data.map((el)=>(
            <tbody>
                <tr>
                <th scope="row">{el._id}</th>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.subject}</td>
                <td>{el.message}</td>
                <td>{el.createdAt}</td>
              </tr>
            </tbody>
            ))}
          </table>
          </div>
        </div>
      </div>
    </>
  );
};