import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Work.css";
import project1 from "../images/froom.JPG";
import project2 from "../images/work.png";
import project3 from "../images/course.PNG";

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <SectionHeading number="04." text="Some Things I’ve Built" />
      <Container>
        <Row className="gy-5 py-5">
          <Col lg={7}>
            <img src={project1} className="img-fluid project-image" alt="" />
          </Col>
          <Col lg={5}>
            <div className="text-right">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">Froom</h2>
              <p className="slate project-description">
                Froom is a mobile application designed to facilitate hotel
                bookings for users on the go. As a backend developer for Froom,
                my primary responsibility is to handle the server-side logic
                using Node.js, Express.js, and MongoDB.
              </p>
              <p className="slate project-description">
                As the ap is not yet launched, my current focus is on building
                and testing the backend architecture, implementing secure
                authentication protocols, designing efficient database schemas,
                and creating APIs that will allow seamless communication between
                the client and server.
              </p>
              <p className="slate project-description">
                Overall, my role in building the backend for Froom is critical
                in ensuring that the app functions seamlessly, delivering a
                smooth and efficient user experience to all customers looking to
                book hotels through the platform.
              </p>
              <p className="used-technologies slate">
                <span className="ut">Node JS</span>
                <span className="ut">ExpressJS</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Mongoose</span>
                <span className="ut">CI/CD</span>
                <span className="ut">AWS</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 py-5">
          <Col lg={7}>
            <img src={project2} className="img-fluid project-image" alt="" />
          </Col>
          <Col lg={5}>
            <div className="text-right">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">PostSpace</h2>
              <p className="slate project-description">
                Post Space is a cloud storage web application, similar to Google
                Drive, that is currently in beta version. As the backend
                developer for Post Space, my primary responsibility is to
                restructure the existing backend codebase, which is written in
                TypeScript, Express, and uses MongoDB and Mongoose for data
                storage.
              </p>
              <p className="slate project-description">
                My role in the restructuring of the backend codebase involves
                analyzing the existing code and identifying areas that need
                improvement in terms of scalability, performance, and
                maintainability. This may involve refactoring existing code,
                optimizing database queries, and implementing new features to
                improve the user experience.
              </p>
              <p className="slate project-description">
                Additionally, I may be responsible for designing new database
                schemas, creating and testing APIs to allow seamless
                communication between the client and server, and implementing
                security measures to protect user data.
              </p>
              <p className="used-technologies slate">
                <span className="ut">Node JS</span>
                <span className="ut">Typescript</span>
                <span className="ut">ExpressJS</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Mongoose</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 py-5">
          <Col lg={7}>
            <img src={project3} className="img-fluid project-image" alt="" />
          </Col>
          <Col
            lg={5}
            className="order-lg-1 order-md-2 order-sm-2 order-xs-2 order-2"
          >
            <div className="text-right">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">
                MERN Stack Web Development Training Course
              </h2>
              <p className="slate project-description">
                As an instructor for the collaborative MERN stack web
                development training course between Rinor and Afklarung, I had
                the privilege of sharing my knowledge and experience with
                aspiring developers.
              </p>
              <p className="used-technologies slate">
                <span className="ut">HTML5</span>
                <span className="ut">CSS3</span>
                <span className="ut">Vanilla JS</span>
                <span className="ut">Material UI</span>
                <span className="ut">React</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Mongoose</span>
                <span className="ut">Git</span>
                <span className="ut">Github</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://github.com/saqlain-shah"
              target="_blank"
              className="greenBtn"
              rel="noreferrer"
            >
              View All Projects
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
