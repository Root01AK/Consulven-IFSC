import React from "react";
import Slider from "react-slick";
import "../App.css";
import {assets} from "../assets/assets.js"

const HomePageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image:assets.main1banner,
      text: "Shaping opportunities into outcomes",
      textpara:"Propelling your business forward with expert insights, visionary solutions, and constant encouragement.",
      textPosition: "left",
    },
    {
      image:assets.main4banner,
      text: "Positioning Your Business for Future Growth",
      textpara:"Access our cross-border financial insights and well-crafted strategies to nurture enduring progress.",
      textPosition: "center",
    },
    {
      image:assets.main3banner,
      text: "Tackling Complexity with Determination",
      textpara:" Align with Consulven IFSC to strengthen your compliance strategy and fine-tune operations to thrive in any jurisdiction.",
      textPosition: "right",
    },
  ];

  return (
    <div className="Home-container">
      <div className="Home-main">
        <div className="carousel-container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="carousel-slide"
                
              >
                <img src={slide.image} alt={`Slide ${index}`}  />
                <div className="slide-wave">
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                   
                  >
                    <path
                      d="M-68.05,54.62 C615.91,179.61 556.09,167.80 525.05,-150.67 L516.02,214.07 L-0.00,149.60 Z"
                      
                    ></path>
                  </svg>
                </div>
                <div className={`carousel-text ${slide.textPosition}`}>
                  <h3>{slide.text}</h3>
                  <p>{slide.textpara}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
