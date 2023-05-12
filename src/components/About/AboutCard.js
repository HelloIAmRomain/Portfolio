import React from "react";
import Card from "react-bootstrap/Card";
import { FaAngleRight } from 'react-icons/fa';


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="highlight">Romain DODET </span>
            from <span className="highlight"> Toulouse, France.</span>
            <br />I am a junior engineer, currently in my last year of studies at <span className="highlight">Icam</span> in Toulouse.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaAngleRight /> Sports
            </li>
            <li className="about-activity">
              <FaAngleRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <FaAngleRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
