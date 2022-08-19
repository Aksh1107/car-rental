import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import dimg from "../../Things/photos/Become_D.png";

const BecomeDriver = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__drive-img">
            <img src={dimg} alt="" className="w-100" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do you want to earn with us?
            </h2>
            <Link to="/driver">
              <button className="btn become__driver-btn mt-4">
                Become a Driver
              </button>
              <br />
              <button className="btn rent__car-btn mt-4">Rent Your Car</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriver;
