import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import { Github, Linkedin } from "./common/Icons";
import working from "../assets/images/png/working-emoji.png";
const Hero = () => {
  const container = {
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "12px",
    paddingRight: "12px",
  };
  return (
    <React.Fragment>
      <MyNav />
      <section
        id="home"
        className="d-flex flex-column align-items-baseline min_vh_xl_100 justify-content-center py-5 bg_light"
      >
        <Container>
          <Row className="align-items-center justify-content-lg-between justify-content-center text-lg-start text-center py-5">
            <Col lg={6}>
              <h1 className="mb-4 fs_5xl text_dark fw-bold">
                Front-End React Developer 👋
              </h1>
              <p className="text_lightdark fw-medium fs_md">
                Hi, I'm Mohit Jakhar. A passionate Front-end React Developer
                based in Hisar, Haryana. 📍
              </p>
              <span className="d-flex justify-content-lg-start justify-content-center gap-3 pt-3">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/mohit-jakhar/"
                >
                  <Linkedin />
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Mkjakhar"
                >
                  <Github />
                </a>
              </span>
            </Col>
            <Col sm={8} lg={6} xl={5}>
              <img className="w-100" src={working} alt="working" />
            </Col>
          </Row>
          <div className="d-flex flex-sm-row flex-column align-items-center align-items-start gap-sm-5 gap-4 pt-sm-5">
            <p className="ff_mulish d-inline-block text-nowrap fs_md text_dark fw-bold tech_stack mb-0">
              Tech Stack
            </p>
            <ul className="mb-0 list-unstyled d-flex align-items-center gap-4">
              <li>
                <img
                  className="w-100"
                  src="https://skillicons.dev/icons?i=html,css"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img
                  className="w-100"
                  src="https://skillicons.dev/icons?i=js,ts"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img
                  className="w-100"
                  src="https://skillicons.dev/icons?i=react,next"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img
                  className="w-100"
                  src="https://skillicons.dev/icons?i=tailwind,scss"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
