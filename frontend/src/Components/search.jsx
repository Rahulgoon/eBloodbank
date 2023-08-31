import React from "react";

const dist=['Alipurduar','Bankura','Paschim Bardhaman','Purba Bardhaman','Birbhum','Cooch Behar','Darjeeling','Dakshin Dinajpur','Hooghly','Howrah','Jalpaiguri','Jhargram','Kolkata','Kalimpong','Malda','Paschim Medinipur','Purba Medinipur','Murshidabad','Nadia','North 24 Parganas','South 24 Parganas','Purulia','Uttar Dinajpur']


export const Search = () => {
  return (
    <>
    <form action="" id="form-select" >
    <h2>FIND BLOOD AVAILABILITY</h2><br />
        <label htmlFor="">| Blood Group |</label>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
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

      <label htmlFor="">| Select District |</label>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option value="">-----Select-----</option>
       {dist.map((el)=>(
        <option value={el}>{el}</option>
       ))}
      </select>

      <button>SEARCH</button>

      </form>
    </>
  );
};
