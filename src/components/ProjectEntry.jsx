import React from "react";

function ProjectEntry(props) {
  return (
    <div className="projectBox" key={props.index}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.alt} className="projectImg"></img>
      </a>
      <div className="projectBoxP">
      <a href={props.link} target="_blank" rel="noreferrer">
      <h3 className="projectTitle">{props.title}</h3>
      </a>
        <p className="projectP">{props.description}</p>
        <br />
        <p><span style={{fontWeight: 900}}>Roadblocks:</span> {props.roadblocks}</p>
        <br />
        <p><span style={{fontWeight: 900}}>Learned:</span> {props.learned}</p>
      </div>
    </div>
  );
}

export default ProjectEntry;