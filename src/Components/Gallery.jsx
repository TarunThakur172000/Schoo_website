import React from 'react';
import './Gallery.css'
import Classroom from "../res/Classroom.jpg"
import cultural from '../res/cultural.jpg'
import Library from '../res/Library.jpg'
import projects from '../res/projects.jpg'
import sportsday from '../res/sports_day.jpg'


const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <h3>Photos</h3>
      <div className="photo-grid">
        <div className="photo">
          <img src={sportsday} alt="Sports Day" />
          <p>Students participating in various sports events.</p>
        </div>
        <div className="photo">
          <img src={projects} alt="Science Exhibition" />
          <p>Students presenting their science projects.</p>
        </div>
        <div className="photo">
          <img src={cultural} alt="Cultural Fest" />
          <p>Students performing in the cultural fest.</p>
        </div>
        <div className="photo">
          <img src={Classroom} alt="Classroom" />
          <p>A glimpse of our interactive classrooms.</p>
        </div>
        <div className="photo">
          <img src={Library} alt="Library" />
          <p>Students reading and studying in the school library.</p>
        </div>
      </div>
      <h3>Videos</h3>
      <div className="video-grid">
        <div className="video">
          <video src="school_tour.mp4" alt="School Tour" controls />
          <p>Virtual tour of Springdale Public School.</p>
        </div>
        <div className="video">
          <video src="annual_function.mp4" alt="Annual Function" controls />
          <p>Highlights from the Annual Function 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;