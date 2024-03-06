import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList";
import GithubIcon from "@material-ui/icons/Github";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="topper">
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <div className="link">
          <Link to={project.url} target="_blank">
           <button>
            <GithubIcon />
            </button> 
          </Link>
          <Link to={project.live} target="_blank">
            <button>Live Link</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
