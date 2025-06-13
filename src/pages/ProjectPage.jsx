import React, { useEffect } from "react";
import { ProjectHero } from "../component/projects/ProjectHero";
import ProjectGrid from "../component/projects/ProjectGrid";

export const ProjectPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#131313";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const projects = [
    {
      heading: "Web Development",
      title: "The Commercial COOP",
      image: "/src/assets/projects.webp"
    },
    {
      heading: "E-commerce",  
      title: "iShopEco UI UX Design & Web Development",
      image: "/src/assets/i-shop.webp"
    },
    {
      heading: "Live-streaming",  
      title: "Visionlapse",
      image: "/src/assets/vision.png"
    },
    {
      heading: "Live-streaming",  
      title: "Clubby UI UX Design & Web/Mobile/IoS App Development",
      image: "/src/assets/cluby.webp"
    }
  ];

  return (
    <>
      <ProjectHero />
     <ProjectGrid projects={projects} />
    </>
  );
};
