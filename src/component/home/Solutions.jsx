import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const isMobile = window.innerWidth < 768;

  const getRandomStart = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const countStart = getRandomStart(0, 550);
  const percentStart = getRandomStart(0, 80);
  const clientsStart = getRandomStart(0, 90);

  return (
    <div className="solutions-container container-1620 mt-5 mb-5">
      <div className="hero-row align-items-center">
        <div className="col-lg-4 col-sm-7 left-section ">
          <div style={{ paddingLeft: isMobile ? "0px" : "80px" }}>
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "400",
                color: "#656565",
              }}
            >
              {" "}
              Solutions Delivered!
            </h1>
            <p style={{ fontSize: "46px", fontWeight: "bolder" }}>
              <span
                style={{
                  color: "#c9f31d",
                  fontSize: "50px",
                  fontWeight: "bolder",
                }}
              >
                Transforming Visions
              </span>{" "}
              <span
                style={{ color: "white", fontSize: "46px", fontWeight: "bold" }}
              >
                into Digital Solutions
              </span>
            </p>
            <p style={{ color: "#adadad" }}>
              At Logixland, we craft cutting-edge software solutions that drive
              efficiency, automation, and growth. From startups to enterprises,
              our technology empowers you to stay ahead in the digital world.
              Let's build the future together!
            </p>
            <div className="d-flex flex-row flex-nowrap align-items-center gap-4">
              <button className="services-button">
                <Link
                  className="services-button text-decoration-none"
                  to="/contact"
                >
                  Contact Us <MdOutlineKeyboardArrowRight size={20} />
                </Link>
              </button>
              <a
                className="button bg-transparent text-white text-decoration-underline flex items-center gap-1"
                href="https://calendly.com/waheedbajeed/initial-meeting?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a meeting <HiMiniArrowTopRightOnSquare size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 center-section ps-5">
          <img
            style={{ width: "80%" }}
            src="/src/assets/abdul-waheed-laravel-developer.png"
            alt="abdul-waheed-laravel-developer"
            className=""
          />
        </div>

        <div className="col-lg-2 col-sm-5 right-section">
          <div className="hero-counter-wrap fadeInUp delay-0-4s" ref={ref}>
            <h3>
              {inView && (
                <CountUp
                  className="count-3"
                  start={countStart}
                  end={599}
                  duration={2}
                  suffix={"+"}
                />
              )}
              <br />
              <span
                style={{
                  color: " #6c757d",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                Projects Completed
              </span>{" "}
              <hr />
            </h3>

            <h3>
              {inView && (
                <CountUp
                  className="count-3"
                  start={percentStart}
                  end={99}
                  duration={2}
                  suffix="% +"
                />
              )}
              <br />
              <span
                style={{
                  color: " #6c757d",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                Client Satisfaction Rate
              </span>{" "}
            </h3>
            <hr />
            <h3>
              {inView && (
                <CountUp
                  className="count-3"
                  start={clientsStart}
                  end={100}
                  duration={2}
                  suffix="+"
                />
              )}
              <br />
              <span
                style={{
                  color: " #6c757d",
                  fontSize: "20px",
                }}
              >
                Global Clients
              </span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
