import React from "react";
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMongodb, DiGit } from "react-icons/di";
import { SiHtml5, SiCss3, SiDocker, SiTensorflow, SiApachespark } from "react-icons/si";
import TechIcon from './TechIcon'; // Import the TechIcon component

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon IconComponent={CgCPlusPlus} name="C++" />
      <TechIcon IconComponent={DiJavascript1} name="JavaScript" />
      <TechIcon IconComponent={DiReact} name="React" />
      <TechIcon IconComponent={SiHtml5} name="HTML5" />
      <TechIcon IconComponent={SiCss3} name="CSS3" />
      <TechIcon IconComponent={DiMongodb} name="MongoDB" />
      <TechIcon IconComponent={DiGit} name="Git" />
      <TechIcon IconComponent={SiDocker} name="Docker" />
      <TechIcon IconComponent={SiTensorflow} name="Tensorflow" />
      <TechIcon IconComponent={SiApachespark} name="Apache Spark" />
    </Row>
  );
}

export default Techstack;
