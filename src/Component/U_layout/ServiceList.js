import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import serviceRecord from "../../Things/record/serviceRecord";

const ServiceList = () => {
  return (
    <>
      {serviceRecord.map((item) => (
        <ServiceItem item={item} key={item.id}></ServiceItem>
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon}></i>
      </span>
      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServiceList;
