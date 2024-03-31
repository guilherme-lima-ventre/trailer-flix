import "./cardSlide.css"
import React from "react";
import Slider from "react-slick";

function CardSlide({ children }) {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
          { children }
        </Slider>
      </div>
    );
  }
  
  export default CardSlide;