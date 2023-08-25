import React from 'react';

function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="project-card">
                <div className="project-inner">
                    <div className="project-front">
                        <img src={props.imgSrc} alt={props.title} className="rounded-img" />
                        <h3 className="shadow-text">{props.title}</h3>
                    </div>
                    <div className="project-back">
                        <h3 className="shadow-text">{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
