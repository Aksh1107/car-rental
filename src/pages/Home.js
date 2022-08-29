import React from "react";
import HeroSlider from "../Component/U_layout/HeroSlider";
import Helmet from "../Component/Helmet/Helmet";
import "../styles/hero-slider.css";
import { Container, Row, Col } from "reactstrap";
import CarForm from "../Component/U_layout/CarForm";
import AboutSection from "../Component/U_layout/AboutSection";
import ServiceList from "../Component/U_layout/ServiceList";
import carRecord from "../Things/record/carRecord";
import CarItem from "../Component/U_layout/CarItem";
import BecomeDriver from "../Component/U_layout/BecomeDriver";
import Test from "../Component/U_layout/Test";
// import BlogList from "../Component/U_layout/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find Your Best Car Here!</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <CarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <AboutSection />
      <hr />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Populer Services</h2>
            </Col>
            <ServiceList></ServiceList>
          </Row>
        </Container>
      </section>
      <hr />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {carRecord.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      <BecomeDriver />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our Client Says</h6>
              <h2 className="section__title">Test</h2>
            </Col>
            <Test></Test>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
