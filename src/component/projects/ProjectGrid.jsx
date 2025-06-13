import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="container my-5">
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <div className="project-card position-relative">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid project-img"
              />
              <div className="project-hover d-flex align-items-center justify-content-center">
                <div className="circle-overlay">
                  <span className="arrow"><GoArrowUpRight /></span>
                </div>
              </div>
            </div>
            
            <h6 className="mt-3" style={{ color: '#c9f31d',textAlign: "center"}}>{project.heading}</h6>
            <h5 className="text-center project-title text-white  mt-3">{project.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
