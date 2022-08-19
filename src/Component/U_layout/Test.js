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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt dolorem commodi veritatis temporibus dicta
          quibusdam officiis minus impedit laboriosam eum repudiandae, nobis
          quaerat molestiae illo nulla? Quae, tempore minima.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt dolorem commodi veritatis temporibus dicta
          quibusdam officiis minus impedit laboriosam eum repudiandae, nobis
          quaerat molestiae illo nulla? Quae, tempore minima.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt dolorem commodi veritatis temporibus dicta
          quibusdam officiis minus impedit laboriosam eum repudiandae, nobis
          quaerat molestiae illo nulla? Quae, tempore minima.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt dolorem commodi veritatis temporibus dicta
          quibusdam officiis minus impedit laboriosam eum repudiandae, nobis
          quaerat molestiae illo nulla? Quae, tempore minima.
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
