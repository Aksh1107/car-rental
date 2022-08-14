import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-fill"></i>
                    <span>
                      Rent a Car
                      <br />
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
                Our philosophy is to take care of our customers and employees
                first. We know if we do this, success will follow – for both our
                company and our employees.
              </p>
            </Col>

            <Col lg="2" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title">Quick Links</h5>
                <ListGroup>
                  {quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col lg="2" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title mb-4">Head Office</h5>
                <p className="office__info">Vadodara, Gujarat, India 390006</p>
                <p className="office__info">Phone: 1231231230</p>
                <p className="office__info">Email: rentacar@gmail.com</p>
                <p className="office__info">Office Time: 10 am - 9 pm</p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="12">
              <div className="mb-4">
                <h5 className="footer__link-title">NewsLetter</h5>
                <p className="section__description">
                  Subscribe our News letter
                </p>
                <div className="newsletter">
                  <input type="email" placeholder="enter your email" />
                  <span>
                    <i className="ri-send-plane-fill"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="footer__bottom">
                <p
                  className="section__description d-flex align-items-center justify-content-center gap-1"
                  style={{ color: "black" }}
                >
                  <i className="ri-copyright-fill"></i>CopyRight {year},
                  Developed by Raj Akshat & Pandey Vishal. all rights reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
