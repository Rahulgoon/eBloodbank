import React, { useEffect, useState } from "react";
import axios from "axios";

export const Notice = () => {

  const [notice, setNotice] = useState([]);
  
  const getNotice = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8001/v1/api/notice");
      //console.log(response.data);
      setNotice(response.data.Notice);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <>
      <h1 className="Notice">Notices</h1>
      <hr />
      {notice &&
        Array.isArray(notice) &&
        notice.map((el) => (
          <div className="notice">
            <h3><strong>{el.title}</strong></h3>
            <p>
              <strong>Date & Time : {el.date}</strong>
            </p>
            <p>{el.content}</p>
          </div>
        ))}
        <hr />
    </>
  );
};