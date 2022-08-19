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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt nemo pariatur saepe, voluptatibus consequatur id iste
                ab totam impedit dolorum, ex laborum numquam molestiae.
                Quibusdam, pariatur tempora dolor doloremque at repudiandae
                eveniet ipsa praesentium facere fugit assumenda recusandae, ut
                sequi?
              </p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-fill"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, incidunt ut veniam alias tempore voluptas
                  exercitationem harum fuga necessitatibus repellendus molestiae
                  quas doloribus natus id dolores adipisci quisquam provident
                  est?
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-fill"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, incidunt ut veniam alias tempore voluptas
                  exercitationem harum fuga necessitatibus repellendus molestiae
                  quas doloribus natus id dolores adipisci quisquam provident
                  est?
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
