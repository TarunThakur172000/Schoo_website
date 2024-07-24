import React from 'react';
import './Students.css'
const Students = () => {
  return (
    <div className="students">
      <h2>Life at Springdale</h2>
      <h3>Extracurricular Activities</h3>
      <ul>
        <li>Music</li>
        <li>Dance</li>
        <li>Drama</li>
        <li>Art</li>
        <li>Sports</li>
        <li>Robotics</li>
        <li>Debate Club</li>
        <li>Science Club</li>
      </ul>
      <h3>Clubs and Societies</h3>
      <ul>
        <li>Literary Society</li>
        <li>Environmental Club</li>
        <li>Astronomy Club</li>
        <li>Coding Club</li>
      </ul>
      <h3>Achievements</h3>
      <ul>
        <li>
          <i className="fas fa-trophy"></i>
          <span>John Smith - National Level Math Olympiad Winner</span>
        </li>
        <li>
          <i className="fas fa-medal"></i>
          <span>Sarah Lee - Gold Medalist in State Swimming Championship</span>
        </li>
        <li>
          <i className="fas fa-robot"></i>
          <span>Tech Innovators Club - Winners of Inter-School Robotics Competition</span>
        </li>
      </ul>
      <h3>Student Council</h3>
      <ul>
        <li>
          <i className="fas fa-user"></i>
          <span>President: Amy Parker, Grade 12</span>
        </li>
        <li>
          <i className="fas fa-user"></i>
          <span>Vice President: Rajiv Mehta, Grade 11</span>
        </li>
        <li>
          <i className="fas fa-user"></i>
          <span>Secretary: Lisa Wong, Grade 10</span>
        </li>
      </ul>
    </div>
  );
};

export default Students;