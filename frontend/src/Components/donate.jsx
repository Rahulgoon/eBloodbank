import React, { useState } from "react";
import axios from "axios";


const donorData = (donor) => {
  axios
    .post("http://127.0.0.1:8001/v1/api/donate", donor)
    .then((res) => alert(res.data))
    .catch((err) => alert(err.message));
};
export const Donate = () => {
    const [donor, setDonor] = useState({
        name: "",
        gender:"",
        birthyear:"",
        mobile:"",
        email: "",
        address: "",
      });
    const handleInput = (e) => {
      const { name, value } = e.target;
      setDonor({...donor,[name]:value});
    };
    const handleSign = (e) => {
      e.preventDefault();
      donorData(donor)
      setDonor({
        name: "",
        gender:"",
        birthyear:"",
        mobile:"",
        email: "",
        address: "",
      });
    };

  let year =[]
  for(let i=1990;i<=2023;i++){
    year.push(i)
  }
 console.log(year)

    return(
        <>
        <form onSubmit={handleSign} className="row g-3">

        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
            Donor Name
          </label>
          <input
            placeholder="Donor Name"
            type="text"
            className="form-control"
            id="inputName4"
            onChange={handleInput}
            name="name"
            value={donor.name}
          />
        </div>

        <div className="col-12">
        <label htmlFor="inputGender4">Gender</label>
        <select
         type="input"
         onChange={handleInput}
         name="gender"
         value={donor.gender}
         className="form-control"
         aria-label=".form-select-sm example"
        >
        <option selected>Choose....</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        </select>
        </div>

        <div className="col-12">
        <label htmlFor="inputBirth4">Birth Year</label>
        <select
         type="input"
         onChange={handleInput}
         name="birthyear"
         value={donor.birthyear}
         className="form-control"
         aria-label=".form-select-sm example"
        >
        <option selected>Choose....</option>
        {year.map((el)=>(
        <option value={el}>{el}</option>
       ))}
        </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputMobile4" className="form-label">
            Mobile No.
          </label>
          <input
            placeholder="Enter Your Mobile No."
            type="number"
            className="form-control"
            id="inputMobile4"
            onChange={handleInput}
            name="mobile"
            value={donor.mobile}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
           Email Id
          </label>
          <input
            placeholder="Enter Your Email Id"
            type="email"
            className="form-control"
            onChange={handleInput}
            name="email"
            value={donor.email}
            id="inputEmail4"
          />
        </div>

        <div className="col-12">
        <label htmlFor="inputEmail4" className="form-label">
            Address
          </label>
                <textarea
                  className="form-control"
                  placeholder="Address"
                  onChange={handleInput}
                  name="address"
                  value={donor.address}
                />
              </div>

        <div className="col-12">
          <button type="submit" className="btn btn-danger">
           SUBMIT
          </button>
        </div>
      </form>
        </>
    );
}