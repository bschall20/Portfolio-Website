import React from "react";

function ProjectEntry(props) {
  return (
    <div className="projectBox">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.alt} className="projectImg"></img>
      </a>
      <div className="projectBoxP">
      <a href={props.link} target="_blank" rel="noreferrer">
      <h3 className="projectTitle">{props.title}</h3>
      </a>
        <p className="projectP">{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectEntry;