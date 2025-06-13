import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useApiRequest from "../../hooks/useApiRequest";

// Skeleton Loader for service cards
const SkeletonCard = () => {
  return (
    <div className="col-lg-6 d-flex">
      <div className="service-card w-100">
        <div style={{ display: "flex", alignItems: "start", gap: "1rem" }}>
          <span className="service-number placeholder-glow">
            <span
              className="placeholder col-2"
              style={{ height: "20px", display: "block" }}
            ></span>
          </span>
          <div className="placeholder-glow w-100">
            <div className="placeholder col-8 mb-2" style={{ height: "20px" }}></div>
            <div className="placeholder col-10 mb-2" style={{ height: "16px" }}></div>
            <div className="placeholder col-6" style={{ height: "16px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await useApiRequest({
        url: "services",
        method: "get",
        data: { limit: 6 },
      });
      setServices(res.data);
    } catch (error) {
      console.log("Error ", error?.data?.message);
      setError(error?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container">
      <h1 className="services-heading">Our Services </h1>
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
          Services
        </p>
      </div>

      <section className="services-section">
        <div className="text-center mb-16">
          <p className="subtitle">Services</p>
          <h2>
            Our <span className="highlight">Special Services</span> For your <br />
            Business Development
          </h2>
        </div>

        <div className="container">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="row gx-5 gy-4">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))
                : services.map((service, index) => (
                    <div key={index} className="col-lg-6 d-flex">
                      <div className="service-card w-100">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "start",
                            gap: "1rem",
                          }}
                        >
                          <span className="service-number">{`0${index + 1}.`}</span>
                          <div>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
