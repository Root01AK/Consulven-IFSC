import React, { useState } from 'react';
import { FaArrowRight  } from 'react-icons/fa';
import { assets } from "../assets/assets";
import { IoIosClose } from "react-icons/io";

const ServiceMainSection = ({ image, icon, heading, content, popImg, popContent, para1, para2, para3, para4}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`serviceCard-main ${isModalOpen ? 'blur-background' : ''}`}>
      <div className="serviceCard-top">
        <img src={image} alt="image" />
        <div className='serviceCard-top-icon'>
            <img src={icon} alt="icon"/>
        </div>
      </div>
      <div className="serviceCard-content">
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
      <div className="serviceCard-button" onClick={openModal}>
        <p>
          Read More <FaArrowRight className="arrow-icon" />
        </p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className='modal-main'>
            <div className='modal-content'>
              <div className='modal-image'>
                <img src={popImg} alt="" />
              </div>
              <div className='modal-head'>
                <h2>{heading}</h2>
                <p>{popContent}</p>
              </div>
              
            </div>
            <div className='modal-para'>
                   <p>{para1}</p>
                   <p>{para2}</p>
                   {para3 && <p>{para3}</p>}
                   {para4 && <p>{para4}</p>}
            </div>
            <div>
              <IoIosClose className='modal-close' onClick={closeModal}/>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceMainSection;
