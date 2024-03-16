import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ITimage from '../assets/ITimage.jpg';
import ITimage3 from '../assets/ITimage3.jpg';
import '../styles/Home.css';

const images = [ITimage, ITimage3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState(true);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    let intervalId;

    if (!isSlideshowPaused) {
      intervalId = setInterval(nextImage, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isSlideshowPaused]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className='home' style={backgroundImageStyle}>
      <div className='headerContainer'>
        <h1>IT SOLUTIONS</h1>
        <p>Get your best solutions every day...</p>
        <Link to='services'>
          <button onClick={() => setIsSlideshowPaused(!isSlideshowPaused)}>Read more</button>
        </Link>
      </div>
      <div className='slideButtons'>
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
}

export default Home;
