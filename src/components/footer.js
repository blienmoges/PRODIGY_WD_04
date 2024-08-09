import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#e7eee7",

          padding: "5px 0",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
            <h3 style={{ marginBottom: "15px", color: "#0e4e4e" }}>About Me</h3>
            <p style={{ margin: 0, color: "grey" }}>
              Hi, I'm Blien Moges, a software engineer. I am an expert in
              front-end development,c++, and Java. I enjoy cooking, learning
              about different cultures, and hiking.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
            <h3 style={{ marginBottom: "15px", color: "#0e4e4e" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a
                  href="#home"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#testimonals"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
            <h3 style={{ marginBottom: "15px", color: "#0e4e4e" }}>Contact</h3>
            <p style={{ margin: 0, color: "grey" }}>
              Email: blienmoges92@gmail.com
            </p>
            <p style={{ margin: 0, color: "grey" }}>Phone: 0921306469</p>
          </div>
          <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
            <h3 style={{ marginBottom: "15px", color: "#0e4e4e" }}>
              Follow Me
            </h3>
            <a
              href="https://linkedin.com/in/bilen moges"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "grey",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/blienmoges"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "grey" }}
            >
              GitHub
            </a>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            borderTop: "1px solid #444",
          }}
        >
          <p style={{ margin: 0, color: "#0e4e4e" }}>
            &copy; 2024 Blien Moges. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
