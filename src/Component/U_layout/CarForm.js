import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const CarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From Address" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="To Address" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="date" placeholder="journey date" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option defaultValue>AC / Non-AC</option>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option defaultValue>type of car</option>
            <option value="ac">Premium</option>
            <option value="non-ac">Non-Premium</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default CarForm;
