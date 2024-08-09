import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  const formGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const formControlStyle = {
    flex: "1",
    marginRight: "10px",
  };

  const fullWidthStyle = {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
  };

  return (
    <div
      id="contact"
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#e7eee7",
      }}
    >
      <h2 style={{ color: "#0e4e4e" }}>Contact Me</h2>
      <form action="https://formspree.io/f/xeojankp" method="post">
        <div style={formGroupStyle}>
          <div style={formControlStyle}>
            <label
              htmlFor="firstName"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#0e4e4e",
              }}
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={fullWidthStyle}
              required
            />
          </div>
          <div style={{ ...formControlStyle, marginRight: "0" }}>
            <label
              htmlFor="lastName"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#0e4e4e",
              }}
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={fullWidthStyle}
              required
            />
          </div>
        </div>
        <div style={formGroupStyle}>
          <div style={formControlStyle}>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#0e4e4e",
              }}
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={fullWidthStyle}
              required
            />
          </div>
          <div style={{ ...formControlStyle, marginRight: "0" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#0e4e4e",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={fullWidthStyle}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px", color: "#0e4e4e" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0e4e4e",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
