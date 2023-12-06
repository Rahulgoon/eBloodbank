import React, { useState } from "react";
import axios from "axios";

export function Payment() {
  const [screenshot, setScreenshot] = useState({ image: null });
  const authtoken = localStorage.getItem("Token");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setScreenshot((prev) => ({ ...prev, image: file }));
  };
  const handleImageUpload = () => {
    const data = { image: screenshot.image.name };
    axios
      .post("http://127.0.0.1:8001/v1/api/upload", data, {
        headers: {
          Authorization: authtoken,
        },
      })
      .then((res) => alert(res.data.message))
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div className="payment_image">
        <h2 style={{ padding: "2px", textAlign: "center" }}>Pay Here</h2>
        <div className="qr_code">
          <img
            src="https://rzp.io/i/JBUWuXI"
            alt="qr code"
          />
        </div>
        <div>
          <h2 style={{ padding: "2px", textAlign: "center" }}>
            Upload your screenshot
          </h2>
          <input
            type="file"
            name="image"
            className="form-control choose_image"
            onChange={handleImageChange}
          />
          <br />
          <button
            style={{
              width: "50%",
              margin: "auto",
              display: "block", // Ensure the button takes up the full width
              backgroundColor: "red",
              border: "0",
            }}
            onClick={handleImageUpload}
            className="btn btn-info upload_image"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}