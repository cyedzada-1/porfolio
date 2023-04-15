import React from "react";
import { Container } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <section id="banner">
      <Container>
        <div className="banner-container">
          <div className="banner-text">
            <h1 className="banner-subtitle green">Hello There! I am</h1>
            <h1 className="banner-heading lightest-slate">
              Syed Saqlain Abbas
            </h1>
            <h1 className="banner-heading slate">
              I build things for the web.<span>&#9786;</span>
            </h1>
            <p className="slate">
              though most people know me as{" "}
              <span className="green">Saqlain Shah.</span> My passion for web
              development has driven me to become a skilled full-stack developer
              with expertise in the<span className="green"> MERN stack</span>{" "}
              and other modern web development technologies.
            </p>
            <a
              href="https://drive.google.com/file/d/1Rdroi7MlACj-ZcCtAfgw2rk__ZCnMPOp/view?usp=sharing"
              target="_blank"
              className="greenBtn"
              rel="noreferrer"
            >
              My Resume
            </a>
            <SocialMedia />
          </div>
        </div>
      </Container>
    </section>
  );
}
