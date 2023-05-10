import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="highlight"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
                Welcome to my corner of the web!
                I'm a self-taught tech enthusiast, with a passion for programming and
                <i>
                    <b className="highlight"> Artificial Intelligence</b>
                </i>.
                <br />
                <br />
                My favorite language?
                <i>
                    <b className="highlight"> Python</b> 🐍
                </i>

                <br />
                <br />

                My journey into the tech world comes from a personal interest.
                How I learnt comes mainly from what I created.
                I learnt through a combination of do-it-yourself projects,
                exhaustive blog reading, and countless hours of YouTube video tutorials. 🚀

                <br />
                <br />

                For instance, when it comes to crafting this website, I have faced a new challenge:
                <i>
                    <b className="highlight"> JavaScript</b>
                </i>.
                <br />
                It was a language I wasn't particularly familiar with.
                However, my approach to learning has always been straightforward - dive in and learn along the way when facing challenges 🌊🤿.
                Otherwise, I would probably never have started the project if I tried to learn all prior.
                So that's what I did. I read, I practiced, I failed, and I learned.. 👨‍💻

                <br />
                <br />

                This website development comes along my personal learning of web development 🌱

                <br />
                <br />

                Here is mostly where I learn to code: Mainly in&nbsp;
                <a href="https://www.freecodecamp.org/">this website</a>
                &nbsp;(it is free, but you may contribute to help the foundation)

                <br />
                <br />

                As a&nbsp;
                <i>
                    <b className="highlight">Data Scientist</b> and <b className="highlight">AI practitioner</b>,
                </i>
                &nbsp;My experience ranges from building regression models for stock risk analysis and variance prediction in Finance,
                to designing physics-informed neural networks simulating electromechanical elements in Robotics.
                I've also created clustering algorithms for localization and crafted autoencoders capable of detecting fraudulent emails and corrupted PDFs in Cybersecurity. 🛡️

                <br />
                <br />

                From sentiment analysis on Twitter data to designing a movie recommendation system,
                I like to mix technology in real-world applications. 🎥🍿

                <br />
                <br />

                I believe that in the world of technology, learning is constant.
                The exciting thing is that there is an infinite amount of knowledge to explore! 📚🚀

                <br />
                <br />

                Enjoy the visit, and have fun! 😄🎉

                <br />
                <br />

                Let's get started! 🚀
            </p>



          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="highlight">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HelloIAmRomain/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/HelloIAmRomain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/romain-dodet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
