import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


export const Hero = () => {
  const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const getRandomStart = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const countStart = getRandomStart(0, 2);
    const percentStart = getRandomStart(0, 150);
    const clientsStart = getRandomStart(0, 500);
  return (
    <div className="container">
      <h1 className="about-heading">About Us</h1>
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
          About Us
        </p>
      </div>
      <div className="col-lg-12">
        <img
          src="/src/assets/abdul-waheed-software-engineer.jpg"
          alt="Abdul-Waheed"
          className="hero-img pt-5"
        />
      </div>
      <div className="container mt-5 row align-items-center">
        <div className="col-lg-7">
          <p className="ceo-heading">About CEO </p>
          <h1 className="ceo-name">
            <span style={{ color: "#c9f31d" }}>Abdul</span> Waheed
          </h1>
          <p className="ceo-content pb-5">
            A visionary Senior Software Engineer and Architect with over 10
            years of industry experience. Passionate about cutting-edge
            technologies, he leads innovation in mobile, web, and desktop
            application development. With expertise in software architecture,
            development, and deployment, he excels in solving complex challenges
            and fostering collaboration to drive technological excellence
          </p>
         <div className="about-info-container">
  <div className="about-info-item">
    <p className="about-info">
      <span style={{ fontSize: "14px", color: "#c9f31d" }}>Born in</span>
    </p>
    <p className="about-info">Pakistan</p>
  </div>

  <div className="about-info-item">
    <p className="about-info">
      <span style={{ fontSize: "14px", color: "#c9f31d" }}>experience</span>
    </p>
    <p className="about-info">10+ Years</p>
  </div>

  <div className="about-info-item">
    <p className="about-info">
      <span style={{ fontSize: "14px", color: "#c9f31d" }}>Interest</span>
    </p>
    <p className="about-info">Development</p>
  </div>
</div>

        </div>

        <div className="col-lg-5 " ref={ref}>
          <div className="about-counter-wrap">
            <div className="counter-item counter-top text-white">
                {inView && (
                                <CountUp className="count-3" start={countStart} end={2} duration={2} suffix={"k"}/>
                            )}
                            project completed</div>

            <div className="counter-logo">
              <img
                src="/src/assets/circle-logo.webp"
                alt="circle-logo"
                className="circle-img"
              />
            </div>

            <div className="bottom-counters">
              <div className="counter-item text-white">
                 {inView && (
                                <CountUp className="count-3" start={percentStart} end={150} duration={2} />
                            )}
                            Reviews</div>
              <div className="counter-item text-white">
                 {inView && (
                                <CountUp className="count-3" start={clientsStart} end={500} duration={2}  />
                            )}

Satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
