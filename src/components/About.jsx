import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/images/webp/about-img.webp";
import working_img from "../assets/images/png/working-emoji.png";
import developer_text from "../assets/images/svg/develpoper-line.svg";
const About = () => {
  return (
    <>
      <section id="about" className="overflow-hidden">
        <Container className="py-5 my-lg-5">
          <Row className="justify-content-between align-items-center text-xl-start text-center flex-column-reverse flex-xl-row">
            <Col
              xs={11}
              lg={8}
              xl={5}
              xxl={6}
              className="pe-xxl-5 mt-4 mt-xl-0"
            >
              <div className="position-relative">
                <img
                  className="w-100 rounded-4"
                  src={aboutImg}
                  alt="aboutImg"
                />
                <div className="position-absolute position-relative working_round_circle d-flex align-items-center justify-content-center rounded-pill">
                  <img width={40} src={working_img} alt="working_img" />
                  <img
                    className="position-absolute w-100 developer_text"
                    src={developer_text}
                    alt="working_img"
                  />
                </div>
              </div>
            </Col>
            <Col xl={6} className="ps-xxl-5">
              <h3 className="fs_lg text_lightblue fw-bold">ABOUT ME</h3>
              <h4 className="text_dark fs_2xl mt-2 mb-3 fw-semibold">
                A dedicated Front-end Developer
                <span className="d-sm-block"> based in Hisar, Haryana 📍</span>
              </h4>
              <p className="fw-medium text_gray fs_md mb-0">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Next, Tailwind, and
                Bootstrap. I excel in designing and maintaining responsive
                websites that offer a smooth user experience. My expertise lies
                in crafting dynamic, engaging interfaces through writing clean
                and optimized code and utilizing cutting-edge development tools
                and techniques. I am also a team player who thrives in
                collaborating with cross-functional teams to produce outstanding
                web applications.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
