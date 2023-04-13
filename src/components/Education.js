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
                        BS Computer Science
                        <span className="green"> from PMAS-AAUR</span>
                      </h5>
                      <p className="education-year slate">2018-2022</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 className="lightest-slate">
                        ICS{" "}
                        <span className="green">
                          from Steps College Rawalpindi{" "}
                        </span>
                      </h5>
                      <p className="education-year slate">2015-2018</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 className="lightest-slate">
                        Science
                        <span className="green">
                          {" "}
                          from Public School & College Skardu
                        </span>
                      </h5>
                      <p className="education-year slate">2014-2015</p>
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
