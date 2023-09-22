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
      {notice &&
        Array.isArray(notice) &&
        notice.map((el) => (
          <div className="noticeadmin">
              <h1>Notice</h1>
              <hr />
              <h3>{el.title}</h3>
              <p>
                <strong>Date:{el.date}</strong>
              </p>
              <p>{el.content}</p>
          </div>
        ))}
      {/* <div>
        <p>Signature: [Insert Signature]</p>
        <p>Name: [Insert Name]</p>
        <p>Designation: [Insert Designation]</p>
      </div> */}
    </>
  );
};
