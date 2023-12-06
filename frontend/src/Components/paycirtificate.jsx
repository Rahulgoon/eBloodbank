import React from "react";

export const PayCirtificate = () => {
  return (
    <>
      <div className="paymain">
        <div className="paymain3">
        <h2 style={{color:"red"}}>Certificate of</h2>
        <h1 style={{color:"red"}}>Congratulations</h1>
        <h2>Mr./Mrs./Miss</h2>
        <hr style={{color:"red",}}></hr>
        <p>
          A successful blood progress is the result of community partnerships.
          Volunters like you help to ensure that those needing blood and blood
          produces recieve thrive. Do behalf of the eBloodBank who have been
          touched by your efforts, we offer our thanks. You have made a
          significant difference in building a stronger blood system for
          eBloodBank.
        </p>
        <div className="paymain2">
          <div className="paychild1">
            <h3></h3>
            <hr style={{border:"1.5px solid black"}}></hr>
            <h4>Signature</h4>
          </div>
          <img src="https://media.istockphoto.com/id/1081786788/vector/drop.jpg?s=612x612&w=0&k=20&c=4Xqh6-K94vU9uAnYBNTu8JWb2CoWi37JB4gKfvdSIb0=" alt="bloodimg" />
          <div className="paychild2">
            <h3></h3>
            <hr style={{border:"1.5px solid black"}}></hr>
            <h4>Date</h4>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};