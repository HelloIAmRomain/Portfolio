import React from 'react';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-inner">
                <div className="project-front">
                    <img src={props.imgSrc} alt={props.title} />
                    <h3>{props.title}</h3>
                </div>
                <div className="project-back">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
