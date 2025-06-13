import { Link } from "react-router-dom";

export const BlogsHero = () => {
  return (
    <div className="container">
      <h1 className="services-heading">Blogs </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: "500",
            margin: 0,
            padding: 0,
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home .
          </Link>
        </p>
        <p
          style={{
            color: "#c9f31d",
            fontSize: "25px",
            fontWeight: "500",
            margin: 0,
            padding: 0,
            textDecoration: "underline",
          }}
        >
          Blogs
        </p>
      </div>
    </div>
  );
};
