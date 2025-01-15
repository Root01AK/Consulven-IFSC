import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import jobData from "../data/jobData";
import SimilarJobCard from "../Components/SimilarJobCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import { submitcareerForm } from '../../apiService';

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_FILE_TYPES = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  if (!job) return <p>Job not found!</p>;

  const similarJobs = jobData.filter((j) => job.similarJobs.includes(j.title));

  // File Upload States
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState({});
  const [uploadComplete, setUploadComplete] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    experience: '',
    jobType: ''
  });

  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState({});

  // Validation Functions
  const validateName = (name) => {
    if (!name) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters long';
    if (!/^[A-Za-z\s]+$/.test(name)) return 'Name can only contain letters and spaces';
    return '';
  };

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone) return 'Phone number is required';
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) return 'Phone number must be 10 digits';
    return '';
  };

  const validateJobTitle = (jobTitle) => {
    if (!jobTitle) return 'Job Title is required';
    if (jobTitle.length < 3) return 'Job Title must be at least 3 characters long';
    return '';
  };

  const validateExperience = (experience) => {
    if (!experience) return 'Experience is required';
    const expNumber = parseInt(experience, 10);
    if (isNaN(expNumber)) return 'Experience must be a number';
    if (expNumber < 0 || expNumber > 50) return 'Experience must be between 0 and 50 years';
    return '';
  };

  const validateJobType = (jobType) => {
    if (!jobType) return 'Job Type is required';
    const validJobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Remote'];
    if (!validJobTypes.includes(jobType)) return 'Please select a valid Job Type';
    return '';
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate individual field on change
    switch (name) {
      case 'name':
        setErrors(prev => ({ ...prev, name: validateName(value) }));
        break;
      case 'email':
        setErrors(prev => ({ ...prev, email: validateEmail(value) }));
        break;
      case 'phone':
        setErrors(prev => ({ ...prev, phone: validatePhone(value) }));
        break;
      case 'jobTitle':
        setErrors(prev => ({ ...prev, jobTitle: validateJobTitle(value) }));
        break;
      case 'experience':
        setErrors(prev => ({ ...prev, experience: validateExperience(value) }));
        break;
      case 'jobType':
        setErrors(prev => ({ ...prev, jobType: validateJobType(value) }));
        break;
      default:
        break;
    }
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      jobTitle: validateJobTitle(formData.jobTitle),
      experience: validateExperience(formData.experience),
      jobType: validateJobType(formData.jobType)
    };

    setErrors(newErrors);

    // Check if any errors exist
    return !Object.values(newErrors).some(error => error !== '');
  };

  // File Upload Methods
  const validateFile = (file) => {
    const fileSizeMB = file.size / (1024 * 1024);
    const fileExtension = file.name.slice(file.name.lastIndexOf("."));
    if (!ALLOWED_FILE_TYPES.includes(fileExtension)) {
      toast.error(`Unsupported file type: ${fileExtension}`);
      return false;
    }
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      toast.error(`File size exceeds ${MAX_FILE_SIZE_MB}MB: ${file.name}`);
      return false;
    }
    return true;
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    files.forEach((file) => {
      if (validateFile(file)) {
        setSelectedFiles((prevFiles) => [...prevFiles, file]);
        startUpload(file);
      }
    });
  };

  const startUpload = (file) => {
    setIsUploading((prev) => ({ ...prev, [file.name]: true }));
    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = (prevProgress[file.name] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(uploadInterval);
          setIsUploading((prev) => ({ ...prev, [file.name]: false }));
          setUploadComplete((prev) => ({ ...prev, [file.name]: true }));
        }
        return { ...prevProgress, [file.name]: newProgress };
      });
    }, 500);
  };

  const handleDeleteFile = (fileName) => {
    setSelectedFiles((files) => files.filter((file) => file.name !== fileName));
    setUploadProgress((progress) => {
      const newProgress = { ...progress };
      delete newProgress[fileName];
      return newProgress;
    });
    setIsUploading((uploading) => {
      const newUploading = { ...uploading };
      delete newUploading[fileName];
      return newUploading;
    });
    setUploadComplete((complete) => {
      const newComplete = { ...complete };
      delete newComplete[fileName];
      return newComplete;
    });
  };

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form and check if files are uploaded
    const isFormValid = validateForm();
    const areFilesUploaded = selectedFiles.length > 0;
  
    if (isFormValid && areFilesUploaded) {
      setIsPopupVisible(true);
      
      // Prepare the form data for submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('jobTitle', formData.jobTitle);
      formDataToSubmit.append('experience', formData.experience);
      formDataToSubmit.append('jobType', formData.jobType);
      
      // Append files to the form data
      selectedFiles.forEach(file => {
        formDataToSubmit.append('files', file);
      });
  
      try {
        // Send data to the backend API
        const response = await submitcareerForm(formDataToSubmit);
        console.log('Form submitted successfully:', response);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobTitle: '',
          experience: '',
          jobType: ''
        });
        setSelectedFiles([]);
        
        // Show success message
        toast.success("Form submitted successfully");
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error("Error submitting the form. Please try again.");
      }
    } else {
      if (!areFilesUploaded) {
        toast.error("Please upload at least one file");
      }
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <ToastContainer />
      <div className="JobDetailsPageContainer">
        {/* Left Side (Previous Implementation) */}
        <div className="leftSide">
          <h1>JOB INFORMATION</h1>
          <div className="jobAllPosition">
            <div className="AllPositionTitle">
              <h2>All Positions</h2>
            </div>
            <div className="AllPositionList">
              {jobData.map((job) => (
                <Link to={`/career/${job.id}`} key={job.id}>
                  <div className="positionName">
                    {job.title} <span className="positionSpan"></span>{" "}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="allSimilarJobTitle">
            <h2>Similar Jobs</h2>
          </div>
          <div className="similarJobContainer">
            {similarJobs.length > 0 ? (
              similarJobs.map((similarJob) => (
                <SimilarJobCard key={similarJob.id} job={similarJob} />
              ))
            ) : (
              <p>No Similar Jobs Available.</p>
            )}
          </div>
        </div>

        {/* Right Side (Previous Implementation) */}
        <div className="rightSide">
          {/* Title Section */}
          <h1 className='jobTitleSm'>JOB INFORMATION</h1>
          <div className="jobTitle">
            <img src={assets.hiringWhite_icon} alt="" />
            <div>
              <h1>{job.title}</h1>
              <p>EXPERIENCE &nbsp; {job.experience}</p>
            </div>
          </div>
          <h1 className="desc">DESCRIPTION</h1>
          <p
            className="descPara"
            dangerouslySetInnerHTML={{
              __html: job.fullDescription.replace(/\n\n/g, "<br/><br/>"),
            }}
          ></p>
          <h1 className="desc">REQUIREMENTS</h1>

          <p className="descPara">{job.requirementPara}</p>

          <div className="requirementPoints">
            {job.requirementPoints &&
              job.requirementPoints.map((point, index) => (
                <p key={index}>
                  <img src={assets.tick_icon} alt="" className="tickIcon" />
                  {point}
                </p>
              ))}
          </div>
          <h1 className="desc">JOB DETAILS</h1>
          <div className="JobSmallDetails">
            <p>
              LOCATION <span>{job.location}</span>
            </p>
            <p>
              QUALIFICATION <span>{job.qualifications}</span>
            </p>
            <p>
              EXPERIENCE <span>{job.experience}</span>
            </p>
            <p>
              JOB TYPE <span>{job.workType}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <form action="#" method="#" className="jobForm" onSubmit={handleSubmit}>
        <h1>BASIC INFORMATION</h1>
        <div className="jobFormField">
          <div className='testing'>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className='testing'>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className='testing'>
            <input
              type="tel"
              placeholder="Your Phone Number"
              name="phone"
              maxLength="10"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className='testing'>
            <input
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
          </div>

          <div className='testing'>
            <input
              type="text"
              placeholder="Years Of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            {errors.experience && <span className="error">{errors.experience}</span>}
          </div>

          <div className='testing'>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.jobType && <span className="error">{errors.jobType}</span>}
          </div>
        </div>

        {/* File Upload Section */}
        <div className="fileUploadContainer">
          <h3 className="uploadTitle">
            Upload your CV and tell us how you can make an impact at Consulven.
          </h3>
          <div
            className={`upload-section ${isDragging ? "drag-active" : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <label htmlFor="file-upload" className="upload-label">
              <div className="drap-label">
                <img src={assets.cloud_icon} alt="" />
                <p>Choose a file or drag & drop it here</p>
                <p className="smLabelTxt">Choose a file</p>
                <p>JPEG, PNG, PDF, and DOC formats up to 5MB</p>
                <label htmlFor="file-upload">Browse File</label>
              </div>
            </label>

            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileSelect}
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
            />
          </div>

          <div className="file-list">
            {selectedFiles.map((file) => (
              <div key={file.name} className="file-item">
                <div className="file-info">
                  <img src={assets.pdf_icon} alt="" className="pdf-icon" />
                  <div>
                    <p>{file.name}</p>
                    <p>{(file.size / 1024).toFixed(2)} KB</p>
                    {!uploadComplete[file.name] && (
                      <div className="progress-container">
                        <progress
                          value={uploadProgress[file.name] || 0}
                          max="100"
                          className="file-progress"
                        ></progress>
                      </div>
                    )}
                  </div>
                </div>

                <div className="upload-controls">
                  {uploadComplete[file.name] ? (
                    <p className="upload-completed">Completed</p>
                  ) : (
                    <>
                      <p className="upload-completed">Uploading...</p>
                      {isUploading[file.name] && (
                        <button
                          onClick={() => handleDeleteFile(file.name)}
                          className="uploadFieldIcon"
                        >
                          <img src={assets.cancel_cion} alt="" />
                        </button>
                      )}
                    </>
                  )}
                  {!isUploading[file.name] && (
                    <button
                      onClick={() => handleDeleteFile(file.name)}
                      className="uploadFieldIcon"
                    >
                      <img src={assets.trash_icon} alt="" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="applyBtn" type="submit">
          <img src={assets.send_icon} alt="" />
          Apply Now
        </button>
      </form>
      {status && <div className=" contactapi alert alert-info mt-3">{status}</div>} {/* Show status message */}
      {/* Popup */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img src={assets.success_Icon} alt="" />
            <h2>Applied Successfully!</h2>
            <p>Thank you for applying. We will review your application soon.</p>
            <button onClick={closePopup}>X</button>
          </div>
        </div>
      )}
      <div className="smSimilarContainer">

        <Slider {...settings}>
          {similarJobs.length > 0 ? (
            <>
              <h2>Similar Jobs</h2>
              {similarJobs.map((similarJob) => (
                <SimilarJobCard key={similarJob.id} job={similarJob} />
              ))}
            </>
          ) : (
            <p></p>
          )}
        </Slider>

      </div>
    </div>
  );
};

export default JobDetails;
