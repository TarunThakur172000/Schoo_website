import React from 'react';
import './curriculum.css';

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <h1 className='App'>Curriculum</h1>

      <h2>Primary (Grades 1-5)</h2>
      <div className="curriculum-grid">
        <div className="curriculum-item">
          <i className="fas fa-book"></i>
          <h4>English</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-calculator"></i>
          <h4>Mathematics</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-flask"></i>
          <h4>Science</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-globe"></i>
          <h4>Social Studies</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-palette"></i>
          <h4>Art</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-running"></i>
          <h4>Physical Education</h4>
        </div>
      </div>

      <h2>Secondary (Grades 6-10)</h2>
      <div className="curriculum-grid">
        <div className="curriculum-item">
          <i className="fas fa-book"></i>
          <h4>English</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-calculator"></i>
          <h4>Mathematics</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-flask"></i>
          <h4>Science</h4>
          <ul>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
          </ul>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-globe"></i>
          <h4>Social Studies</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-computer"></i>
          <h4>Computer Science</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-running"></i>
          <h4>Physical Education</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-palette"></i>
          <h4>Art</h4>
        </div>
      </div>

      <h2>Senior Secondary (Grades 11-12)</h2>
      <h3 className="stream-header">Science Stream</h3>
      <div className="curriculum-grid">
        <div className="curriculum-item">
          <i className="fas fa-flask"></i>
          <h4>Physics</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-flask"></i>
          <h4>Chemistry</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-flask"></i>
          <h4>Biology</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-calculator"></i>
          <h4>Mathematics</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-computer"></i>
          <h4>Computer Science</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-book"></i>
          <h4>English</h4>
        </div>
      </div>

      <h3 className="stream-header">Commerce Stream</h3>
      <div className="curriculum-grid">
        <div className="curriculum-item">
          <i className="fas fa-chart-line"></i>
          <h4>Accountancy</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-briefcase"></i>
          <h4>Business Studies</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-chart-line"></i>
          <h4>Economics</h4>
        </div>
        <div className="curriculum-item">
          <i className="fas fa-calculator"></i>
          <h4>Mathematics</h4>
       </div>
       <div className="curriculum-item">
          <i className="fas fa-calculator"></i>
          <h4>English</h4>
       </div>
       </div>
       </div>
       )
       }
export default Curriculum;