import React from 'react'
import ProjectItem from '../Components/ProjectItem'

import '../Styles/Project.css'
import  { ProjectList } from '../Helper/ProjectList'


const Projects = () => {
  return (
    <div className="projects">
    <h1> My Personal Projects</h1>
    <div className="projectList">
      {ProjectList.map((project, idx) => {
        return (
          <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
        );
      })}
    </div>
  </div>
  )
}

export default Projects