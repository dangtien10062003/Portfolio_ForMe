import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ngoc Tien</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NT</h3>
        </Col>
        <Col md="4" className="footer-body">
           <ul className="home-about-social-links">
                        <li className="social-icons">
                          <a
                            href="https://github.com/dangtien10062003"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.facebook.com/dangtien03?locale=vi_VN"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaFacebook />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.instagram.com/t_up2003/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiFillInstagram />
                          </a>
                        </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
