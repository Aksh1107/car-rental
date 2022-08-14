import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            <h5 className="text-light mb-3">For Rent ₹1000 Per Day</h5>
            <h1 className="text-light mb-4">
              Reserve Now and Get 50% off on your First reservation
            </h1>
            <Link to="/cars">
              <button className="btn reserve__btn mt-4">
                <>Reserve Now</>
              </button>
            </Link>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            <h5 className="text-light mb-3">For Rent ₹1000 Per Day</h5>
            <h1 className="text-light mb-4">
              Reserve Now and Get 50% off on your First reservation
            </h1>
            <Link to="/cars">
              <button className="btn reserve__btn mt-4">
                <>Reserve Now</>
              </button>
            </Link>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            <h5 className="text-light mb-3">For Rent ₹1000 Per Day</h5>
            <h1 className="text-light mb-4">
              Reserve Now and Get 50% off on your First reservation
            </h1>
            <Link to="/cars">
              <button className="btn reserve__btn mt-4">
                <>Reserve Now</>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
