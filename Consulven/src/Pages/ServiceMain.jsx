// import React from 'react'
import ServiceSection from "../Components/ServiceSection";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import { assets } from "../assets/assets";
import EnquiryForm from "../Components/EnquiryForm";

const ServiceMain = () => {
  return (
    <div className="ServiceMain-container">
      <Header
        title="OUR SERVICES"
        para="Consulting, Compliance, Secretarial"
        image={assets.servb}
      />
      <div className="ServiceMain-main">
        <div className="ServiceMain-head">
          <SectionTitle sectionTitle={"OUR SERVICE"} />
        </div>
        <div className="ServiceMain1">
          <div className="serviceMain1-content1">
            <div className="serviceMain1-content1-heading">
              <div className="serviceMain1-vector1"></div>

              <h2>What We Do</h2>
              <h1>Browse Our <br/> Expertise</h1>
              <div className="serviceMain1-vector2"></div>
            </div>
            <p>
              Through our global expertise across two key areas of need ―
              Management Consulting and Compliance & Secretarial― our clients are
              better advised within, and across, their strategic and operational
              frameworks.
            </p>
          </div>
          <div className="serviceMain1-content2">
            <img src={assets.serviceImg} alt="Consulven" />
          </div>
        </div>
        <div className="ServiceMain2">
          <ServiceSection
            icon= {assets.smv1}
            mainImg={assets.serman1}
            number={"01"}
            heading={"Management Consulting"}
            content={
              "Driving growth and optimizing performance through strategic and operational excellence. Empowering organizations to unlock their full potential."
            }
            path="/service/Card1"
          />

          <ServiceSection
            icon={assets.smv2}
            mainImg={assets.serman2}
            number={"02"}
            heading={"Compliance & Secretarial"}
            content={
              "Our Compliance & Secretarial services are designed to simplify complex regulatory requirements, providing businesses with the assurance to operate seamlessly."
            }
            path="/service/Card2"
          />
        </div>
        <div className="enquiry-form">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
