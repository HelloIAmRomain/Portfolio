import React from 'react';
import { Col } from 'react-bootstrap';

function TechIcon({ IconComponent, name }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <div className="tech-card">
        <div className="tech-card-inner">
          <div className="tech-card-front">
            <IconComponent/>
          </div>
          <div className="tech-card-back">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TechIcon;
