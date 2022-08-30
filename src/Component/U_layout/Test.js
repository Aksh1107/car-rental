import React from "react";
import Slider from "react-slick";
import img1 from "../../Things/photos/sachin.jpg";
import img2 from "../../Things/photos/dipika.jpg";
import img3 from "../../Things/photos/virat.jpg";
import img4 from "../../Things/photos/priyanka.jpg";
import "../../styles/testimonial.css";

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Went to Gujarat in September 22. Had a car reserved at Vroom. When we
          got there they would not accept the card and we were left without a
          vehicle. so, we walked next door to rent a car service. Was in and out
          very quickly with a nice car for a good price. We rented 2 cars from
          Budget. In 2 weeks they accepted all our cards. Were very nice and
          gave us great service. We love Budget.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img1} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">Sachin</h6>
            <p className="section__description">customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had a very positive experience with Rent a car service. I made a
          reservation the night before. I got a good online price and I prepaid.
          I used digital check in. When I arrived, the next day, I spent only
          about 10 minutes at the counter. The car, a Mitsubishi Outlander, was
          clean and ran well. The staff was professional and friendly. I would
          use them again.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img2} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">Dipika</h6>
            <p className="section__description">customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          We always use the Rent a car service As The price is lower than any of
          their competitors. The cabs are always clean. They are spacious enough
          for our household, which is a family of 6.. I recommend them to
          everyone who plan car rent Trips in their future! They have Newer
          Cars, very clean( spotless ) and very comfortable.I'm so satisfied
          with the service.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img3} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">Kohli</h6>
            <p className="section__description">customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          We had a great experience with Rent a car service! There was only one
          car remaining in the class of vehicle we reserved, which ended up
          having a safety recall. We were promptly upgraded and sent on our way.
          I was a bit taken aback when we were handed the keys and told to let
          them know if there were any concerns, but on a brand new vehicle there
          were none.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img4} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="md-0 mt-3">Priyanka</h6>
            <p className="section__description">customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Test;
