import React from "react";

import "./portifolio.css";
function Portfolio() {
  return (
    <div>
      <h3 id="portfolio" style={{ color: "#7D7E75" }}>
        My Skills
      </h3>
      <h1 style={{ fontSize: "40px", color: "#0E4E4E" }}>My Expertise</h1>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <div className="box">
            <img src="react-1.svg" alt="react" width="80px" height="80px" />
            <h2
              style={{ fontSize: "30px", fontWeight: "bold", height: "50px" }}
            >
              Front-End
            </h2>
            <p>
              I specialize in creating dynamic and responsive web interfaces
              using HTML, CSS, and JavaScript, ensuring an optimal user
              experience across all devices.
            </p>
          </div>
          <div className="box">
            <img src="c.svg" alt="react" width="80px" height="80px" />
            <h2
              style={{ fontSize: "30px", fontWeight: "bold", height: "50px" }}
            >
              Ctt
            </h2>
            <p>
              I am proficient in C++ programming, with a focus on developing
              high-performance applications and software solutions that require
              efficient memory management.
            </p>
          </div>

          <div className="box">
            <img src="java-5.svg" alt="react" width="80px" height="80px" />
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                height: "50px",
              }}
            >
              Java
            </h2>
            <p>
              I have extensive experience in developing robust and scalable
              backend systems and desktop applications, leveraging the
              versatility of Java.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
