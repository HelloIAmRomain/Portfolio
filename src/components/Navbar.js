import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import useDarkMode from './useDarkMode';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";



function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [logoSize, setLogoSize] = useState(150); // set initial logo size

  const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


  function scrollHandler() {
    if (window.scrollY >= 30) {
      updateNavbar(true);
      setIsTop(false);
      setLogoSize(60); // set logo size to smaller value
    } else {
      updateNavbar(false);
      setIsTop(true);
      setLogoSize(150); // set logo size to original value
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []); // add/remove event listener on component mount/unmount

  window.addEventListener("scroll", scrollHandler);

  const containerClass = navColour ? "page-content sticky" : "page-content";


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
              src={logo}
              className="img-fluid logo"
              alt="brand"
              style={{
                width: `${logoSize}px`,
                height: `${logoSize}px`,
                transition: "width 0.3s, height 0.3s", // add transition property
              }}
            />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-container" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <OverlayTrigger
              placement="bottom"
                overlay={
                  <Tooltip id="tooltip-disabled">Under construction</Tooltip>
                }
              >
                <span
                  className="d-inline-block"
                  onClick={() => updateExpanded(false)}
                >
                  <Nav.Link
                    disabled
                    href="https://capsules-videos.com/blog"
                    target="_blank"
                    rel="noreferrer"
                    title="in construction"
                    style={{ cursor: "not-allowed", opacity: "0.5" }}
                  >
                    <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                  </Nav.Link>
                </span>
              </OverlayTrigger>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/HelloIAmRomain/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="nav-item-switch ml-3">
              <div className="toggle-container">
                <Form.Check
                  type="switch"
                  id="dark-mode-switch"
                  label={<span className="switch-label">{darkMode ? "🌙" : "☀️"}</span>}
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  className="mt-1"
                />
              </div>
            </Nav.Item>






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
