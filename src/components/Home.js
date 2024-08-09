import React from "react";
function Home() {
  return (
    <div
      id="home"
      className="container"
      style={{ backgroundColor: "#e7eee7", marginTop: "60px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "550px",
          padding: "0 30px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            paddingTop: "90px",
          }}
        >
          <h3 style={{ color: "#7D7E75" }}>hey,i'm Blien Moges</h3>
          <h1 style={{ fontSize: "40px", color: "#0E4E4E" }}>
            React Developer | Software Engineer{" "}
          </h1>
          <button
            style={{
              padding: "15px 15px",
              cursor: "pointer",
              backgroundColor: "#0E4E4E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
            }}
          >
            Hire me
          </button>
        </div>
        <div>
          <img
            src="blen.jpg"
            alt="blen's img"
            style={{ borderRadius: "10px" }}
            height="550px"
            width="450px"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
