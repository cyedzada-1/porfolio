import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading number="02." text="Where I've Worked" />
      <Container>
        <Row className="justify-content-center gy-5 mt-4">
          <Col lg={10}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="gy-4">
                <Col sm={3}>
                  <Nav variant="tabs" className="flex-column">
                  <Nav.Item>
                      <Nav.Link eventKey="first">CurliDev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">RINOR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">K-Plex Solutions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Car Adivsers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Freelancing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                  <Tab.Pane eventKey="first">
                      <h5 className="lightest-slate">
                        Web Developer
                        <span className="green"> @Freelancer</span>
                      </h5>
                      <p className="experience-year slate">2019-2021</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Developed Full Stack Websites such as tourism,
                            E-Commerce etc.
                          </li>
                          <li className="slate">
                            Built static websites using HTML, CSS, Bootstrap,
                            Javascript, WOrdpress, shopify etc.
                          </li>
                          <li className="slate">
                            Customized Wordpress Themes.
                          </li>
                          <li className="slate">
                            Completed 10+ client projects.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 className="lightest-slate">
                        MERN Stack Developer
                        <span className="green">
                          <a
                            href="https://www.example.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            RINOR.PK ~ OTA
                          </a>
                        </span>
                      </h5>
                      <p className="experience-year slate">2021-2022</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Developed and implemented an OTA system using the
                            MERN stack to enhance user engagement
                          </li>
                          <li className="slate">
                            Utilized Node.js to write code, following industry
                            and company standards.
                          </li>
                          <li className="slate">
                            Worked in collaboration with different departments
                            to improve and implement new processes for the ERP
                            system.
                          </li>
                          <li className="slate">
                            Mentored junior employees on how to use the new
                            system and provided ongoing support.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 className="lightest-slate">
                        MERN Stack Developer{" "}
                        <span className="green">
                          <a
                            href="https://www.example.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            AutoAdvisers ~ Marketplace
                          </a>
                        </span>
                      </h5>
                      <p className="experience-year slate">2022-Present</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Building and deploying backend API for super admin
                            dashboard using NodeJS, ExpressJS, and MongoDB.
                          </li>
                          <li className="slate">
                            Creating and implementing CI/CD pipeline on AWS.
                          </li>
                          <li className="slate">
                            Integrating front-end and backend for seamless
                            functionality.
                          </li>
                          <li className="slate">
                            Maintaining and troubleshooting API to ensure smooth
                            operation.
                          </li>
                          <li className="slate">
                            Continuously improving and optimizing API and
                            pipeline for better performance.
                          </li>
                          <li className="slate">
                            Responsible for end-to-end development of the
                            backend API for super admin.
                          </li>
                          <li className="slate">
                            Collaborating with cross-functional teams to deliver
                            high-quality solutions.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h5 className="lightest-slate">
                        MERN Stack Developer{" "}
                        <span className="green">
                          <a
                            href="https://www.example.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            AutoAdvisers ~ Marketplace
                          </a>
                        </span>
                      </h5>
                      <p className="experience-year slate">2022-Present</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Building and deploying backend API for super admin
                            dashboard using NodeJS, ExpressJS, and MongoDB.
                          </li>
                          <li className="slate">
                            Creating and implementing CI/CD pipeline on AWS.
                          </li>
                          <li className="slate">
                            Integrating front-end and backend for seamless
                            functionality.
                          </li>
                          <li className="slate">
                            Maintaining and troubleshooting API to ensure smooth
                            operation.
                          </li>
                          <li className="slate">
                            Continuously improving and optimizing API and
                            pipeline for better performance.
                          </li>
                          <li className="slate">
                            Responsible for end-to-end development of the
                            backend API for super admin.
                          </li>
                          <li className="slate">
                            Collaborating with cross-functional teams to deliver
                            high-quality solutions.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5 className="lightest-slate">
                        Web Developer
                        <span className="green"> @Freelancer</span>
                      </h5>
                      <p className="experience-year slate">2019-2021</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Developed Full Stack Websites such as tourism,
                            E-Commerce etc.
                          </li>
                          <li className="slate">
                            Built static websites using HTML, CSS, Bootstrap,
                            Javascript, WOrdpress, shopify etc.
                          </li>
                          <li className="slate">
                            Customized Wordpress Themes.
                          </li>
                          <li className="slate">
                            Completed 10+ client projects.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
