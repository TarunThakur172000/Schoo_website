import React from 'react';
import './Admissions.css'
const Admissions = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1l64U1PMNQ5fw82Ni-KQXWfTnWAScZ4CU/view?usp=drive_link'; // Replace with your PDF file URL
    const fileName = 'Tarun_Thakur_Resume.pdf'; // Replace with your desired file name
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      link.target="_blank"
      link.click();
    };
  return (
    <div className="admission-process">
      <h2>Admission Process</h2>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <h3>Criteria</h3>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h3>Important Dates</h3>
      <div style={{display:"flex"}}>
      <ul>
        <li>
          <i className="fas fa-calendar-alt"></i>
          <span>Admission Form Availability:</span>
          <span>March 1st</span>
        </li>
        <li>
          <i className="fas fa-calendar-alt"></i>
          <span>Last Date for Submission:</span>
          <span>March 31st</span>
        </li>
        <li>
          <i className="fas fa-pencil-alt"></i>
          <span>Entrance Test:</span>
          <span>April 15th</span>
        </li>
        <li>
          <i className="fas fa-bell"></i>
          <span>Announcement of Results:</span>
          <span>April 30th</span>
        </li>
      </ul>
      <button className="btn-download" onClick={()=>{handleDownload()}}><i className='fas fa-download'/> Download Admission Form</button>
    </div>
    </div>
  );
};

export default Admissions;