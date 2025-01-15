import React, { useState } from "react";
import { FaChartLine, FaCogs, FaIndustry } from "react-icons/fa";
import ServiceMainSection from "../Components/serviceMainSection";
import { assets } from "../assets/assets";
import Header from "../Components/Header";
import service1Data from "../data/service1Data";
import EnquiryForm from "../Components/EnquiryForm"

const ServiceCard1 = () => {
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
            <img src={assets.main1b} alt="" />
            <p>Corporate Advisory</p>
          </div>
          <div className="ServiceCard-2">
            <div className="ServiceCard2-head">
              <img src={assets.serviceCircle} alt="" />
              <h1>Management Consulting</h1>
              <p>
                Our management consulting services focus on driving measurable
                improvements across your organization’s strategic and
                operational dimensions. We work closely with clients to identify
                key opportunities for growth, streamline processes, and optimize
                business performance.
              </p>
            </div>
            <div className="ServiceCard2-img">
              <img src={assets.sabt2} alt="" />
            </div>
          </div>
        </div>
        <div className="ServiceCard-list">
          {service1Data.map((service) => (
            <ServiceMainSection
              key={service.id}
              image={service.image}
              icon={service.icon}
              heading={service.heading}
              content={service.content}
              popImg={service.popImg}
              popContent={service.popContent}
              para1={service.para1}
              para2={service.para2}
              para3={service.para3}
              para4={service.para4}
            />
          ))}
        </div>
        <div className="enquiry-form">
        <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard1;
