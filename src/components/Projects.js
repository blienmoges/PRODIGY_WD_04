export default function Projects() {
  return (
    <div id="testimonals" style={{ margin: "80px 20px" }}>
      <p style={{ color: "#7D7E75" }}>Recent projects</p>
      <h2 style={{ color: "#0E4E4E" }}>My Portfolio</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "30px 10px",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <div
          style={{
            width: "50%",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#e7eee7",
            padding: "20px 20px",
            height: "200px",
          }}
        >
          <h1 style={{ color: "#0e4e4e" }}> Ecommerce</h1>
          <p>
            I developed a comprehensive e-commerce platform featuring dynamic
            product listings, secure user authentication, and a seamless
            checkout process.
          </p>
          <a
            href="https://github.com/blienmoges/gdsc_study_session_g10/tree/main/ecommerce%20website"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#7D7E75" }}
          >
            View in github
          </a>
        </div>
        <div
          style={{
            width: "50%",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#e7eee7",
            padding: "20px 20px",
            height: "200px",
          }}
        >
          <h1 style={{ color: "#0e4e4e", height: "50px" }}> Todo lists</h1>
          <p>
            I created a user-friendly to-do list application that allows users
            to manage their tasks efficiently, with features such as task
            prioritization and deadlines.
          </p>
          <a
            href="https://github.com/blienmoges/gdsc_study_session_g10/tree/main/todolist"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#7D7E75" }}
          >
            View in github
          </a>
        </div>
        <div
          style={{
            width: "50%",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#e7eee7",
            padding: "20px 20px",
            height: "200px",
          }}
        >
          <h1 style={{ color: "#0e4e4e" }}> Note Taking</h1>
          <p>
            I built a versatile note-taking application that enables users to
            create, edit, and organize their notes, with support for text
            formatting and categorization.
          </p>
          <a
            href="https://github.com/blienmoges/gdsc_study_session_g10/tree/main/note"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#7D7E75" }}
          >
            View in github
          </a>
        </div>
      </div>
    </div>
  );
}
