import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const dist = [
  "Alipurduar",
  "Bankura",
  "Paschim Bardhaman",
  "Purba Bardhaman",
  "Birbhum",
  "Cooch Behar",
  "Darjeeling",
  "Dakshin Dinajpur",
  "Hooghly",
  "Howrah",
  "Jalpaiguri",
  "Jhargram",
  "Kolkata",
  "Kalimpong",
  "Malda",
  "Paschim Medinipur",
  "Purba Medinipur",
  "Murshidabad",
  "Nadia",
  "North 24 Parganas",
  "South 24 Parganas",
  "Purulia",
  "Uttar Dinajpur",
];

export const Search = () => {
  const authToken = localStorage.getItem("Token");
  const navigate = useNavigate();
  const [isLoad, setIsload] = useState(false);
  const [search, setSearch] = useState({
    blood: "",
    address: "",
  });
  const [res, setRes] = useState([]);

  const date = new Date();
  const year = date.getFullYear()

  const getDonor = () => {
    axios
      .get("http://127.0.0.1:8001/v1/api/donate")
      .then((res) => setRes(res.data))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getDonor();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let data = res.filter(
      (el) => el.bloodgroup === search.blood && el.address === search.address
    );
    setRes(data);
    setSearch({
      blood: "",
      address: "",
    });
    setIsload(!isLoad);
  };
  //console.log(res)
  const handleNavigate = () => {
    authToken
      ? setTimeout(() => {
          navigate("/payment");
        }, 1200)
      : setTimeout(() => {
          navigate("/login");
        }, 1200);
  };

  return (
    <>
      {!isLoad ? (
        <form onSubmit={handleSearch} id="form-select">
          <h2>FIND BLOOD AVAILABILITY</h2>
          <br />
          <label>| Blood Group |</label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={handleInput}
            name="blood"
            value={search.blood}
            required
          >
            <option selected>-----Select-----</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label>| Select District |</label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={handleInput}
            name="address"
            value={search.address}
            required
          >
            <option selected value="">
              -----Select-----
            </option>
            {dist.sort().map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
          <br />
          <input type="submit" value="Search" className="btn btn-danger" />
        </form>
      ) : (
        <div className="containersearch">
          <h2 style={{ textAlign: "center", color: "red" }}>
            Blood Stock Availability
          </h2>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Donor ID</th>
                <th scope="col">Name</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Age</th>
                <th scope="col">District</th>
                <th scope="col">Pay For Blood</th>
              </tr>
            </thead>
            <tbody>
              {res.map((el) => (
                <tr key={el._id}>
                  <th scope="row">{el._id}</th>
                  <td>{el.name}</td>
                  <td>{el.bloodgroup}</td>
                  <td>{year - el.birthyear}</td>
                  <td>{el.address}</td>
                  <td>
                    <button onClick={handleNavigate} className="btn btn-danger">
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-danger" onClick={() => setIsload(!isLoad)}>
            RESET
          </button>
        </div>
      )}
    </>
  );
};
