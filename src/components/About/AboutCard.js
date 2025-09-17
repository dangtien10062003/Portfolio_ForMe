// src/components/About/AboutCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about.greeting')} <span className="purple">{t('about.name')} </span>
            {t('about.from')} <span className="purple"> {t('about.location')}</span>
            <br />
            {t('about.currentJob')}
            <br />
            {t('about.education')}
            <br />
            <br />
            {t('about.activities')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity1')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity2')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity3')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity4')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity5')}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('about.quote')}"
          </p>
          <footer className="blockquote-footer">{t('about.quoteAuthor')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;