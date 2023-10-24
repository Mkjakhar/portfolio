import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MyNav = () => {
  const [navChange, setNavChange] = useState(true);
  if (navChange === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <React.Fragment>
      <nav className="position-fixed top-0 start-0 end-0 z-3">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center py-3 py-sm-4 px-2 px-sm-5"
        >
          <span className="text_dark fs_lg fw-bold">Mohit.dev</span>
          <button
            onClick={() => setNavChange(!navChange)}
            className={`menu_btn bg-transparent p-0 d-sm-none position-relative border-0 ${
              navChange ? "" : "close_btn"
            }`}
          >
            <span className="position-absolute end-0"></span>
            <span className="position-absolute end-0"></span>
          </button>
          <ul
            className={`d-flex gap-4 align-items-center ps-0 mb-0 list-unstyled mobile_view ${
              navChange ? "" : "show_nav"
            }`}
          >
            <li onClick={() => setNavChange(!navChange)}>
              <a className="text_dark fs_md fw-semibold" href="#home">
                Home
              </a>
            </li>
            <li onClick={() => setNavChange(!navChange)}>
              <a className="text_dark fs_md fw-semibold" href="#about">
                About
              </a>
            </li>
            <li onClick={() => setNavChange(!navChange)}>
              <a className="text_dark fs_md fw-semibold" href="#projects">
                Projects
              </a>
            </li>
            <li onClick={() => setNavChange(!navChange)}>
              <a className="text_dark fs_md fw-semibold" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default MyNav;
