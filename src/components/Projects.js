import React from 'react';
import "../styles/Projects.css";
import FullProjects from "./ProjectData";
import ResponsiveProjects from "./ResponsiveProjectData";
import useMediaQuery from "../helpers/useMediaQuery";

const Projects = () => {
  const isBreakpoint = useMediaQuery("730px");

  return (
    <>
      <span id="projects" className="section-header">Projects</span>
      <hr className="rule" />

      <div>
        {isBreakpoint ? (
          <ResponsiveProjects />
        ) : (
          <FullProjects className="project-container" />
        )}
        
      </div>
    </>
  )
}

export default Projects;