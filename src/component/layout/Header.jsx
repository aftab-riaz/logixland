import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [scrolled, setScrolled] = useState(false);
  const isComplete = Object.values(formData).every((val) => val.trim() !== "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top container-fluid shadow-sm ${
          scrolled ? "header-bg" : "bg-transparent"
        }`}
      >
        <div className="container-fluid px-3">
          <Link className="navbar-brand logo-padding" to="/">
            <img
              src="/src/assets/LogixLand.svg"
              alt="LogixLand Software Solutions"
              style={{ height: "50px" }}
            />
          </Link>

          
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

         
          <div className="d-none d-lg-block">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#rightModal"
              aria-controls="rightModal"
            >
              <img
                className="icon-circle-modal mb-3"
                src="/src/assets/sidebar-tottler%20(1).svg"
                alt="Open Sidebar"
              />
            </button>
          </div>
        </div>
      </nav>

      
      <div
        style={{ backgroundColor: "black" }}
        className="pt-5 container Header-modal text-light offcanvas offcanvas-end"
        tabIndex="-1"
        id="rightModal"
        aria-labelledby="rightModalLabel"
      >
        <div className="offcanvas-header">
          <h5 id="rightModalLabel" className="offcanvas-title">
            Get Appointment
          </h5>
          <button
            style={{
              backgroundColor: "#c9f31d",
              color: "black",
              border: "1px solid #c9f31d",
            }}
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <Button
              style={{ backgroundColor: "#c9f31d", color: "black" }}
              type="submit"
              disabled={!isFormValid || !isComplete}
            >
              Submit Now
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
