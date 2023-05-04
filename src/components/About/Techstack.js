import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMongodb, DiGit } from "react-icons/di";
import { SiHtml5, SiCss3, SiDocker, SiTensorflow, SiApacheSpark, SiPowerbi, SiRlang } from "react-icons/si";
import { RlangIcon, SparkIcon } from './CustomIcons';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <RlangIcon />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SparkIcon />
    </Col>

    </Row>
  );
}

export default Techstack;
