import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/About.css";
import aboutImage from "../images/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeading number="01." text="About Me" />
      <Container>
        <Row className="gy-5 justify-content-center">
          <Col md={7}>
            <p className="about-text slate">
              As a skilled MERN stack developer with over 2+ years of
              experience, I have developed a deep understanding of the entire
              web development process. I have successfully delivered
              high-quality applications that meet the unique needs of my clients
              by utilizing my expertise in MongoDB, Express, React, and Node.js.
              My proficiency in front-end and back-end technologies has enabled
              me to create responsive and dynamic web applications that provide
              an optimal user experience. I am passionate about staying
              up-to-date with the latest web development trends and
              technologies, and I am committed to continuous learning and
              growth. With my strong technical skills and problem-solving
              abilities, I am confident in my ability to make a positive impact
              on any project that I am a part of.
            </p>

            <p className="about-text slate">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="skills">
              <p className="slate">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>SCSS / SAAS</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>Material UI</span>
                <span>Mantine</span>
                <span>AntDesign</span>
                <span>Javascript (ES6+)</span>
                <span>Typescript</span>
                <span>React</span>
                <span>Node JS</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>Redux</span>
                <span>Next JS</span>
                <span>Git</span>
                <span>Github</span>
                <span>AWS</span>
                <span>CMS(Wordpress / Shopify )</span>
                <span>C++</span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <img src={aboutImage} className="img-fluid " alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
