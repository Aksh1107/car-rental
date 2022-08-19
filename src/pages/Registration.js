import React from "react";
import useInput from "../Hook/use-input";
import "../styles/registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const isZip = (value) => value.length === 6;
  const isMobile = (value) => value.length === 10;

  const {
    value: fNameValid,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lNameValid,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetlNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: enteredMobile,
    isValid: enteredMobileIsValid,
    hasError: mobileInputHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHandler: mobileBlurHandler,
    reset: resetMobileInput,
  } = useInput(isMobile);

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredZip,
    isValid: enteredZipIsValid,
    hasError: zipInputHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
    reset: resetZipInput,
  } = useInput(isZip);

  let formIsValid = false;

  if (
    fNameIsValid &&
    lNameIsValid &&
    enteredMobileIsValid &&
    enteredEmailIsValid &&
    enteredAddressIsValid &&
    enteredCityIsValid &&
    enteredZipIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !fNameIsValid &&
      !enteredEmailIsValid &&
      !enteredMobileIsValid &&
      !lNameIsValid &&
      !enteredAddressIsValid &&
      !enteredCityIsValid &&
      !enteredZipIsValid
    ) {
      return;
    }

    console.log(
      fNameValid,
      lNameValid,
      enteredMobileIsValid,
      enteredEmail,
      enteredAddress,
      enteredCity,
      enteredZip
    );

    resetFNameInput();
    resetlNameInput();
    resetEmailInput();
    resetMobileInput();
    resetAddressInput();
    resetCityInput();
    resetZipInput();
  };
  return (
    <div className="back">
      <div className="Form">
        <h2 className="welcome">Welcome!</h2>
        <form
          className="frm row g-3"
          style={{ margin: "10px" }}
          onSubmit={formSubmissionHandler}
        >
          <>
            <div className={"col-md-6"}>
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter Your First Name"
                onChange={fNameChangeHandler}
                onBlur={fNameBlurHandler}
                value={fNameValid}
              />
              {fNameHasError && (
                <p className="error-text" style={{ color: "red" }}>
                  First Name must not be empty!{" "}
                </p>
              )}
            </div>
            <div className={"col-md-6"}>
              <label htmlFor="name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Last Name"
                onChange={lNameChangeHandler}
                onBlur={lNameBlurHandler}
                value={lNameValid}
              />
              {lNameHasError && (
                <p className="error-text" style={{ color: "red" }}>
                  Last Name must not be empty!{" "}
                </p>
              )}
            </div>
          </>
          <div className={"col-md-6"}>
            <label htmlFor="name" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="mobile"
              placeholder="Enter Your Mobile"
              onChange={mobileChangeHandler}
              onBlur={mobileBlurHandler}
              value={enteredMobile}
            />
            {mobileInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Please enter the valid Mobile
              </p>
            )}
          </div>
          <div className={"col-md-6"}>
            <label htmlFor="name" className="form-label">
              E-Mail Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Please enter the valid email
              </p>
            )}
          </div>
          <div className={"col-md-12"}>
            <label htmlFor="inputAddress2" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Apartment, studio, or floor"
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              value={enteredAddress}
            />
            {addressInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Address must not be empty!{" "}
              </p>
            )}
          </div>
          <div className={"col-md-5"}>
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="City Name"
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              value={enteredCity}
            />
            {cityInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                please Enter City Name!
              </p>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option defaultValue="-1">--Select--</option>
              <option value="1">Gujarat</option>
              <option value="2">Goa</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">
              Zip Code
            </label>
            <input
              type="number"
              className="form-control"
              id="inputZip"
              placeholder="Zip Code"
              onChange={zipChangeHandler}
              onBlur={zipBlurHandler}
              value={enteredZip}
            />
            {zipInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Invalid Zip Code!{" "}
              </p>
            )}
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="button col-12">
            <button
              type="submit"
              className="btn btn-success m-3"
              disabled={!formIsValid}
            >
              Register
            </button>
            <Link to="/">
              <button type="submit" className="btn btn-danger m-3">
                Cancle
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
