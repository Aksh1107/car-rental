import React from "react";

import CommonSection from "../Component/U_layout/CommonSection";
import Helmet from "../Component/Helmet/Helmet";
import AboutSection from "../Component/U_layout/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../Component/U_layout/BecomeDriver";

import driveImg from "../Things/photos/drive.jpg";
import Members from "../Component/U_layout/Members";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClassName="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  From the moment the rider is matched with a driver until he or
                  she reaches the destination, the Rent a car service experience
                  has been designed to always put safety first. We are committed
                  to providing a reliable and safe platform to both our riders &
                  drivers.
                </p>

                <p className="section__description">
                  Our technology enables us to focus on the experience, before,
                  during, and after every trip!
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+911234567890 </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <Members />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
