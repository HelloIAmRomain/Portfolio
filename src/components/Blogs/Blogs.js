import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import blogImage1 from '../../Assets/blog1.png'; // You can replace these with actual blog images
import blogImage2 from '../../Assets/blog2.png';

function Blogs() {
  return (
    <Container fluid className="blogs-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="highlight">Blogs</strong>
        </h1>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          {/* Example of a single blog card */}
          <Col md={4} className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-card-front">
                <h2 className="accent-text">Title of Blog 1</h2>
                <img src={blogImage1} alt="blog 1" />
              </div>
              <div className="blog-card-back">
                <p>
                  Summary or excerpt of the blog post goes here. You can add more details as needed.
                </p>
              </div>
            </div>
          </Col>
          {/* Example of a second blog card */}
          <Col md={4} className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-card-front">
                <h2 className="accent-text">Title of Blog 2</h2>
                <img src={blogImage2} alt="blog 2" />
              </div>
              <div className="blog-card-back">
                <p>
                  Summary or excerpt of the blog post goes here. You can add more details as needed.
                </p>
              </div>
            </div>
          </Col>
          {/* You can add more blog cards here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
