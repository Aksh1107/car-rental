import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/cars",
    display: "Car",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help! &nbsp;&nbsp;</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i>1231231230
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-fill"></i>Log in
                </Link>
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-fill"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
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
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-cener gap-2">
                <span>
                  <i className="ri-global-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Vadodara City, Gujarat</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-cener gap-2">
                <span>
                  <i className="ri-time-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0" className="text-end">
              <button className="header__btn btn d-flex align-items-center justify-content-end text-end">
                <Link to="/contact">
                  <i className="ri-phone-fill"></i>Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-item-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="search" />
                <span>
                  <i className="ri-search-eye-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
