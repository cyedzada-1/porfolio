import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Education.css";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <SectionHeading number="03." text="Where I've Studied" />
      <Container>
        <Row className="justify-content-center gy-5 mt-4">
          <Col lg={10}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="gy-4">
                <Col sm={3}>
                  <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Graduation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Intermediate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Matriculation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 className="lightest-slate">
                        BS Computer Science{" "}
                        <span className="green">
                          <a
                            href="https://www.uaar.edu.pk/index.php"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            from PMAS-AAUR
                          </a>
                        </span>
                      </h5>
                      <p className="education-year slate">2018-2022</p>
                      <div className="education-details">
                        <ul>
                          <li className="slate">
                            I completed my BS in Computer Science from Pir Mehr
                            Ali Shah Arid Agriculture University - PMAS AAUR
                          </li>
                          <li className="slate">
                            I learned about various computer science topics such
                            as algorithms, data structures, programming
                            languages, and databases.
                          </li>

                          <li className="slate">
                            I also gained practical skills by working on various
                            projects and internships, including web development,
                            software engineering, and data analysis.
                          </li>
                          <li className="slate">
                            In addition to my studies, I also participated in
                            extracurricular activities such as coding
                            competitions, and volunteer work.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 className="lightest-slate">
                        ICS{" "}
                        <span className="green">
                          <a
                            href="http://biserawalpindi.edu.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            from BISE Rawalpindi Board
                          </a>
                        </span>
                      </h5>
                      <p className="education-year slate">2015-2018</p>
                      <div className="education-details">
                        <ul>
                          <li className="slate">
                            Intermediate in ICS from BISE Rawalpindi Board at{" "}
                            <a
                              href="https://www.publiccollegeskardu.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Steps College Rawalpindi.{" "}
                            </a>
                          </li>
                          <li className="slate">
                            Learned about C programming language and MS Access.
                          </li>
                          <li className="slate">
                            Gained practical experience by working on small
                            projects of C language and MS Access.
                          </li>
                          <li className="slate">
                            Participated in extracurricular activities.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 className="lightest-slate">
                        Science{" "}
                        <span className="green">
                          <a
                            href="https://fbise.edu.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            from FBISE Islamabad
                          </a>
                        </span>
                      </h5>
                      <p className="education-year slate">2013-2015</p>
                      <div className="education-details">
                        <ul>
                          <li className="slate">
                            <a
                              href="https://www.publiccollegeskardu.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Public School & College Skardu
                            </a>
                          </li>

                          <li className="slate">
                            <a
                              href="https://www.facebook.com/people/Jinnah-Public-School-And-College-Satellite-Town-Skardu/100063768920996/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              9th grade from Jinnah Public School (JPS):
                            </a>
                          </li>
                          <li className="slate">
                            Studied a range of subjects, including mathematics,
                            physics, chemistry, and biology.
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
