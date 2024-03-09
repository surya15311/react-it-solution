import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const imageUrls = [
  "https://img.freepik.com/premium-photo/solution-businessman-pressing-touch-screen-interface-inscription-solutions-business-concept-internet-concept_161452-10261.jpg",
  "https://d1x11ch5bj8onr.cloudfront.net/serviceImages/2022/06/62a098ce58812_1654692046.jpg",
  "https://media.istockphoto.com/id/1290455818/vector/programming-coding-neural-network-and-artificial-intelligence-or-ai-software-develop.jpg?s=612x612&w=0&k=20&c=eVVUTVPG0d4KusaADehFdSquOfBkd0-3TuIgmPssJQw="
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState(true);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    let intervalId;

    if (!isSlideshowPaused) {
      intervalId = setInterval(nextImage, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isSlideshowPaused]);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
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
