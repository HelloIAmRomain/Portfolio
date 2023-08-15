import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import ProjectCard from './ProjectCard';
import projectImage1 from '../../Assets/project1.png';
import projectImage2 from '../../Assets/project2.png';



function Projects() {
  return (
    <Container fluid className="section">
      <Particle />
      <Container>
        <div className="title-background">
          <h1 className="section-heading">
            My <strong className="highlight">Projects</strong>
          </h1>
        </div>

        <Row style={{ justifyContent: 'center', padding: '10px' }}>
            <Col md={4}>
                <ProjectCard 
                title="Project 1" 
                imgSrc={projectImage1}
                description="Description for Project 1" 
                />
            </Col>
            <Col md={4}>
                <ProjectCard 
                title="Project 2" 
                imgSrc={projectImage2} 
                description="Description for Project 2"
                />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
