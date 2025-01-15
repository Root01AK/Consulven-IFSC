// import React from "react";
import ServiceMainSection from "../Components/serviceMainSection";
import { assets } from "../assets/assets";
import Header from "../Components/Header";
import service2Data from "../data/service2Data";
import EnquiryForm from "../Components/EnquiryForm"

const ServiceCard2 = () => {
  return (
    <div className="ServiceCard-container">
      <Header
        title="OUR SERVICES"
        para="Browse our Expertise"
        image={assets.servb}
      />
      <div className="ServiceCard-main">
        <div className="ServiceCard-1">
          <div className="ServiceCard-1-main">
            <img src={assets.mainb01} alt="" />
            <p>Legal & Corporate</p>
          </div>
          <div className="ServiceCard-2">
            <div className="ServiceCard2-head">
              <img src={assets.serviceCircle} alt="" />
              <h1>Compliance & Secretarial</h1>
              <p>
              Our Compliance & Secretarial services are designed to simplify complex regulatory requirements,
               providing businesses with the assurance they need to operateseamlessly in any jurisdiction.
                We specialize in both local and international regulatory frameworks, ensuring businesses meet their
                 obligations without compromising their strategic goals.

              </p>
            </div>
            <div className="ServiceCard2-img">
              <img src={assets.sabt2} alt="" />
            </div>
          </div>
        </div>
        <div className="ServiceCard-list">
          {service2Data.map((service) => (
            <ServiceMainSection
              key={service.id}
              image={service.image}
              icon={service.icon}
              heading={service.heading}
              content={service.content}
              popContent={service.popContent}
              popImg={service.popImg}
              para1={service.para1}
              para2={service.para2}
              para3={service.para3}
              para4={service.para4}
            />
          ))}
        </div>
         <div className="enquiry-form">
        <EnquiryForm/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
