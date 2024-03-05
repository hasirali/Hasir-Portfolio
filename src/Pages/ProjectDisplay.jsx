import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList";
import GithubIcon from "@material-ui/icons/Github";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.url} target="_blank">
        <GithubIcon />
      </Link>

    </div>
  );
}

export default ProjectDisplay;