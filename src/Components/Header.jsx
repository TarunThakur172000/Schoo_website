// Header.js
import {React,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const headerOffsetTop = document.querySelector('.header').offsetTop;
  
        
  
        if (scrollTop >= headerOffsetTop) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
      };

      
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    
    <header className={`header ${isFixed? 'fixed' : ''} ${isHidden? 'hidden' : ''}`}>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about-us">About Us</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/admissions">Admissions</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;