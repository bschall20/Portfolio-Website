import React from "react";

function ProjectEntry(props) {
  return (
    <div className="projectBox">
      <a href={props.link} target="_blank">
        <img src={props.image} className="projectImg"></img>
      </a>
      <div className="projectBoxP">
        <h3 className="projectTitle">{props.title}</h3>
        <p className="projectP">{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectEntry;