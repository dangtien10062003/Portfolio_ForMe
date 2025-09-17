// src/components/Home/Home2.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home.introduce')}
            </h1>
            <p className="home-about-body">
              {t('home.intro1')}
              <br />
              <br />
              {t('home.intro2')}
              <i>
                <b className="purple"> {t('home.languages')} </b>
              </i>
              <br />
              <br />
              {t('home.intro3')} &nbsp;
              <i>
                <b className="purple">{t('home.interests')} </b> {t('home.intro4')}{" "}
                <b className="purple">
                  {t('home.ai')}
                </b>
              </i>
              <br />
              <br />
              {t('home.intro5')} <b className="purple">{t('home.nodejs')}</b> {t('home.intro6')}
              <i>
                <b className="purple">
                  {" "}
                  {t('home.frameworks')}
                </b>
              </i>
              &nbsp; {t('home.intro7')}
              <i>
                <b className="purple"> {t('home.reactNext')}</b>
              </i>
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
            <h1>{t('home.findMe')}</h1>
            <p>
              {t('home.feelFree')} <span className="purple">{t('home.connect')} </span>{t('home.withMe')}
            </p>
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
    </Container>
  );
}

export default Home2;