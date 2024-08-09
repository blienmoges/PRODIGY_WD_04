import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";
const NavBar = () => {
  const scrollWithOffset = (el) => {
    const yOffset = -100;
    const yCoordinate =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: "smooth" });
  };
  return (
    <nav>
      <div
        style={{
          marginRight: "750px",
          marginLeft: "0",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "25px",
            backgroundColor: "#A3A3A3",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => scrollWithOffset(document.getElementById("home"))}
        >
          B
        </p>
      </div>
      <div>
        <ul>
          <li>
            <Link
              to="#home"
              style={{ textDecoration: "none", color: "white" }}
              scroll={(el) => scrollWithOffset(el)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#portfolio"
              style={{ textDecoration: "none", color: "white" }}
              scroll={(el) => scrollWithOffset(el)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="#testimonals"
              style={{ textDecoration: "none", color: "white" }}
              scroll={(el) => scrollWithOffset(el)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              style={{ textDecoration: "none", color: "white" }}
              scroll={(el) => scrollWithOffset(el)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
