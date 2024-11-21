import React, { useState,useEffect } from 'react'
import './Header.css'

const backgroundImages = [
  './dexlee.jpg'
]

const Header = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  const handlePrevImage = ()=>{
    const newPrevIndex = currentImage === 0 
      ? backgroundImages.length - 1 
      : currentImage - 1;
    setNextImage(newPrevIndex);
  }

  const handleNextImage = ()=>{
    const newNextIndex = (currentImage + 1) % backgroundImages.length;
    setNextImage(newNextIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 500); // Matches CSS transition time

    return () => clearTimeout(timer);
  }, [nextImage]);

  return (
    <div className='header'>
        {backgroundImages.map((image, index) => (
          <div 
            key={image}
            className={`header-bg ${
              index === currentImage ? 'active' : 
              index === nextImage ? 'next' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      
      <div className="header-contents">
        <h2>Northern <br/>Fried Chicken</h2>
        <p>Choose from a diverse menu of exclusive items from your neighbourhood restaurant northern fried chicken. Experience the real taste of fried chicken varieties from us. Have a great experience with us</p>
        <div className='header-btn'>
        <button onClick={handlePrevImage}>&lt;</button>
        <button onClick={handleNextImage}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Header
