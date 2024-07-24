// Faculty.jsx
import React from 'react';
import './Faculty.css'
import Avatar from "../res/Avatar.png"
const Faculty = () => {
  const facultyProfiles = [
    {
      name: 'John Doe',
      designation: 'Principal',
      qualification: 'M.Ed',
      experience: '20 years of experience in educational administration'
    },
    {
      name: 'Jane Smith',
      designation: 'Vice Principal',
      qualification: 'M.Sc. in Physics',
      experience: '15 years of teaching experience'
    },
    {
      name: 'Emily Johnson',
      designation: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '10 years of teaching experience'
    },
    {
      name: 'Michael Brown',
      designation: 'Mathematics Teacher',
      qualification: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience'
    },
    {
      name: 'Sophia Davis',
      designation: 'Science Teacher',
      qualification: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience'
    },
    {
      name: 'David Wilson',
      designation: 'Computer Science Teacher',
      qualification: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience'
    }
  ];

  return (
    <div className="faculty">
      <h2 className="title">Faculty</h2>
      <ul className="faculty-list">
        {facultyProfiles.map((profile, index) => (
          <li key={index} style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <h3>{profile.name}</h3>
            <p>{profile.designation}</p>
            <p>{profile.qualification}</p>
            <p>{profile.experience}</p>
            </div>
            <img src={Avatar} style={{width:"7rem",height:"7rem",float:"right"}}/>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Faculty;