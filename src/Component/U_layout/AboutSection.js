import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../Things/photos/tesla.png";

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Rent a Car Service</h2>
              <p className="section__description">
                We wish to become the largest personal urban mobility providers
                of Self Drive Car Rental in the country. We believe our team
                will achieve this soon by delighting our customers every day! So
                say Friendly rent a car Service enjoy, explore & enrich your
                experience
              </p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-fill"></i>
                  We are a team of enthusiasts, artists, explorers, problem
                  solvers and passionate engineers; The motive is to bring the
                  concept of self drive car rental to explore and get people
                  drive Kilometres with their personal space and freedom in a
                  convenient and luxurious manner.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-fill"></i>
                  Be a corporate tour, a weekend getaway, a family vacation,
                  your honeymoon trip or as small as picking or dropping someone
                  from airport, railway station or the bus terminal; we have a
                  car for every occasion just choose Rent a car Service for self
                  drive car rental
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} className="w-100" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
