import React from 'react';
import "../styles/Projects.css";
import FullProjects from "./ProjectData";
import ResponsiveProjects from "./ResponsiveProjectData";
import useMediaQuery from "../helpers/useMediaQuery";

const Projects = () => {
  const isBreakpoint = useMediaQuery();

  return (
    <>
      <span id="projects" className="section-header">Projects</span>
      <hr className="rule" />

      <div className="project-container">
        {isBreakpoint ? (
          <ResponsiveProjects />
        ) : (
          <FullProjects />
        )}
        
      </div>
    </>
  )
}

export default Projects;