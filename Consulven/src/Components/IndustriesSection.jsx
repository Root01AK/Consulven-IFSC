import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndustriesSection = ({
    smallText,
    mainImage,
    sectionTitle,
    sectionTitle2,
    sectionContentTitle,
    sectionContentPara,
    carouselData = [],
    reverse,
    last,
    carouselSettings = {},
}) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!last && window.innerWidth > 1000) {
            gsap.registerPlugin(ScrollTrigger);

            const el = sectionRef.current;
            gsap.to(el, {
                scale: 0.8,
                filter: "blur(10px)",
                scrollTrigger: {
                    trigger: el,
                    start: "top -10%",
                    end: "bottom center",
                    scrub: true,
                },
            });
        }
    }, [last]);

    const defaultSettings = {
        infinite: true,
        arrows: false,
        autoplaySpeed: 2000,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...carouselSettings,
    };

    return (
        <div
            className={`industrySection ${reverse} ${last}`}
            ref={sectionRef}
        >
            {/* Left Side */}
            <div className="leftSide">
                <div className="leftContainer">
                    <img src={mainImage} alt="Main" />
                    <div className="below">
                        <h3>{smallText}</h3>
                    </div>
                    <div className="carousel">
                        <Slider {...defaultSettings}>
                            {carouselData.map((item, index) => (
                                <div key={index} className="carouselContent">
                                    <img src={item.image} alt={`Carousel ${index}`} />
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </Slider>
                        <div className="bar">
                            <div className="Inbar"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="rightSide">
                <div className="animaText">
                    <h1>{sectionTitle}</h1>
                    <p>{sectionTitle2}</p>
                    <div className="layerGroup">
                        {[...Array(40)].map((_, idx) => (
                            <div key={idx} className={`layer1 ${idx >= 20 ? "two" : ""}`}></div>
                        ))}
                    </div>
                </div>
                <div className="leftContainerSm">
                    <img src={mainImage} alt="Main" />
                    <div className="below">
                        <h3>{smallText}</h3>
                    </div>
                    <div className="carousel">
                        <Slider {...defaultSettings}>
                            {carouselData.map((item, index) => (
                                <div key={index} className="carouselContent">
                                    <img src={item.image} alt={`Carousel ${index}`} />
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </Slider>
                        <div className="bar">
                            <div className="Inbar"></div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="overlap">
                        <h1>{sectionContentTitle}</h1>
                        <div className="bar">
                            <div className="Inbar"></div>
                        </div>
                        <p>{sectionContentPara}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;
