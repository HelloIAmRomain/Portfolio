import React from 'react';
import { Col } from 'react-bootstrap';

function TechIcon({ IconComponent, name }) {
  return (
    <Col md={4} className="blog-card">
      <div className="tech-card">
        <div className="tech-card-inner">
          <div className="tech-card-front">
            {IconComponent()}
            <h2 className="accent-text">{name}</h2>
          </div>
          <div className="tech-card-back">
            <p>Summary or excerpt of the blog post goes here. You can add more details as needed.</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TechIcon;
