import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import ProjectCard from './ProjectCard';
import clairifyImage from '../../Assets/clairify.png';

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
            title="Clairify" 
            imgSrc={clairifyImage}
            description="Clairify is a FastAPI project that analyzes your text and provides various insights including sentiment with score, summary, and keyword extraction. (Disclaimer: takes a long time to process because it runs on a Raspberry Pi)"
            link="http://clairify.freeboxos.fr:17143/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
