import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import demo from "../assets/images/webp/lapinc.io_(BigLaptop).webp";
const PortfolioSection = () => {
  return (
    <section id="projects" className="py-5 my-md-5">
      <Container className="text-lg-start text-center">
        <p className="fs_lg text_lightblue fw-bold">PORTFOLIO</p>
        <h3 className="text_dark fs_2xl fw-bold mb-md-5 mb-4">
          Each project is a unique piece of development 🧩
        </h3>
        <div className="portfolio_cards">
          <Row className="justify-content-between align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} xl={7} className="pe-xl-5">
              <div className="img_box mt-4 mt-lg-0">
                <a target="_blank" href="https://lapinc.io/" rel="noreferrer">
                  <img className="w-100 h-auto" src={demo} alt="website" />
                </a>
              </div>
            </Col>
            <Col
              lg={6}
              xl={5}
              className="d-flex flex-column align-items-center text-center mt-3 mt-lg-0"
            >
              <h3 className="fs_lg text_dark text-uppercase fw-bold">
                LAPINC <span className="fs_base text_gray">(October 2022)</span>
              </h3>
              <p
                className="text_gray fs_md fw-semibold pt-2"
                style={{ maxWidth: "380px" }}
              >
                LAPiNC is a NFT website which takes you to the core of your
                memories utilizing all senses, helping you experience nostalgia
                in a beautiful and unique way.
              </p>
              <div className="stack d-flex justify-content-center gap-3">
                <p className="fs_md text-black fw-semibold">React</p>
                <p className="fs_md text-black fw-semibold">Bootstrap</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
