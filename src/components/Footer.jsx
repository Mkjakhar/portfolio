import React from "react";
import { Container } from "react-bootstrap";
import { Github, Linkedin, Location, Mail } from "./common/Icons";

const Footer = () => {
  return (
    <section id="contact">
      <Container className="py-5 text-center text-sm-start">
        <p className="fs_lg text_lightblue fw-bold">CONTACT</p>
        <h3 className="text_dark fs_2xl fw-bold">
          Don't be shy! Hit me up! 👇
        </h3>
        <div className="py-md-5 py-4 d-flex flex-column flex-md-row align-items-md-center gap-md-5 gap-4">
          <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
            <span className="p-2 rounded-pill text_lightblue social_icons">
              <Location />
            </span>
            <div className="contact__info">
              <h3 className="text_dark fs_md fw-bold">Location</h3>
              <p className="mb-0 text_gray fs_md">Hisar, Haryana</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center gap-4 ps-md-5">
            <span className="p-2 rounded-pill text_lightblue social_icons">
              <Mail />
            </span>
            <div>
              <h3 className="text_dark fs_md fw-bold">Mail</h3>
              <a
                className="text_gray fs_md"
                href="mailto:mkjakhar909@gmail.com"
              >
                mkjakhar909@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-5 bg_dark">
        <Container className="py-5 text-center text-sm-start d-flex align-items-center flex-column flex-sm-row gap-4 justify-content-between">
          <h3 className="text_white fs_md fw-bold mb-0">
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </h3>
          <span className="d-flex footer_icons gap-3">
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
        </Container>
      </div>
    </section>
  );
};

export default Footer;
