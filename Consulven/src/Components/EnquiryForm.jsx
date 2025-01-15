import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import { GrSend } from "react-icons/gr";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import CustomCursor from "../Components/cursorMain.jsx";
import { submitEquiryForm } from '../../apiService';


const EnquiryForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    company_name: '',
    user_message: ''
  });

  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    company_name: ''
  });

  const handleChooseBottomClick = () => {
    setIsFormVisible(true);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.user_name) {
      newErrors.user_name = 'Name is required.';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email) {
      newErrors.user_email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email format.';
      isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.user_phone) {
      newErrors.user_phone = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(formData.user_phone)) {
      newErrors.user_phone = 'Phone number must be 10 digits.';
      isValid = false;
    }

    // Company name validation
    if (!formData.company_name) {
      newErrors.company_name = 'Company name is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const response = await submitEquiryForm(formData);
      setStatus("We’ve received your message and will be in touch soon!"); // Set success message
      // Clear form data after success
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        company_name:'',
        user_message: '', // Reset the correct field name
      });
    } catch (error) {
      setStatus("There was an error sending your message.");
    }
  };

  return (
    <div className="home-bottom-container">
      <div className="Homepage-choose-bottom">
        {isHovering && (
          <CustomCursor
            cursorImage={assets.clickImg}
            cursorSize={{ width: 150, height: 150 }}
          />
        )}
        <div
          className={`Homepage-choose-bottom-main ${
            isFormVisible ? "show-form" : ""
          }`}
          style={{ backgroundImage: `url(${assets.talkwithBg})` }}
          onClick={handleChooseBottomClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="Homepage-choose-bottom-img">
            <img
              className="homepage-talkwith"
              src={assets.talkwith}
              alt=""
            />
          </div>
          <div className="Homepage-choose-bottom-content">
            <h1>We look forward to helping you.</h1>
            <h2>Please fill out the form below, and one of our representatives will get in touch with you shortly</h2>
            <p>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="enquiry-talktoUs-icon"
              />
              Call for more Info (+91 81488812523)
            </p>
          </div>
        </div>
      </div>
      <div className={`home-form ${isFormVisible ? "show-form" : ""}`}>
        <div className="home-form-head">
          <h1>enquiry form</h1>
        </div>
        <form autoComplete="off" onSubmit={handleSend}>
          <div className="home-form-name">
            <div className="home-form-details">
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.user_name && <span className="error-message">{errors.user_name}</span>}
            </div>

            <div className="home-form-details">
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email Address"
                value={formData.user_email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.user_email && <span className="error-message">{errors.user_email}</span>}
            </div>
            <div className="home-form-details">
              <input
                type="tel"
                id="phoneNumber"
                name="user_phone"
                placeholder="Phone Number"
                value={formData.user_phone}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.user_phone && <span className="error-message">{errors.user_phone}</span>}
            </div>

            <div className="home-form-details">
              <input
                type="text"
                id="companyName"
                name="company_name"
                placeholder="Company Name"
                value={formData.company_name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.company_name && <span className="error-message">{errors.company_name}</span>}
            </div>

            <div className="home-form-details">
              <textarea
                id="message"
                name="user_message"
                placeholder="Message"
                rows={2}
                value={formData.user_message}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="home-form-button">
            <button className="home-form-text" type="submit">
              <GrSend />
              Send
            </button>
          </div>
        </form>
        {status && <div className=" contactapi alert alert-info mt-3">{status}</div>} {/* Show status message */}
      </div>
    </div>
  );
};

export default EnquiryForm;
