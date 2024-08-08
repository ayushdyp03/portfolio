import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nh from "../../images/nh.jpg";
import isro from "../../images/isro.jpg";
import barc from "../../images/barc.pdf";
import Google from "../../images/Google.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://github.com/shreevedpathak04/CERTIFICATES/blob/main/barc%20certificate%20official.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={nh} alt={nh} />}
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          BARC(Bhabha Atomic Research Centre).
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - B.A.R.C
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://github.com/shreevedpathak04/CERTIFICATES/blob/main/ISRO%20Approval%20Letter_offline%20(1).pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={isro} alt={isro} />}
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          ISRO (Indian Space Research Organization)
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - I.S.R.O
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://github.com/shreevedpathak04/CERTIFICATES/blob/main/Google%20Cloud%20Career%20Readiness%20Certificate%20-%201phyAw6U%20-%20Shreenidhi%20Pandurang%20Vedpathak.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={Google} alt={Google} />}
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Google Data Analytics Professional Certificate
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Google
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
