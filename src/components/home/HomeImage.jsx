// src/components/HomeImage.jsx
import React, { useEffect } from 'react';
import './home.css';
import profileAnimated from '../../assets/profile1.jpg';

const HomeImage = () => {
  useEffect(() => {
    const eyes = [
      { eye: document.getElementById('eye1'), pupil: document.getElementById('pupil1') },
      { eye: document.getElementById('eye2'), pupil: document.getElementById('pupil2') }
    ];

    const handleMouseMove = (e) => {
      eyes.forEach(({ eye, pupil }) => {
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const angle = Math.atan2(dy, dx);
        const radius = 3;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const blinkEyes = () => {
      eyes.forEach(({ eye }) => eye.classList.add('blink'));
      setTimeout(() => {
        eyes.forEach(({ eye }) => eye.classList.remove('blink'));
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(() => {
      if (Math.random() < 0.7) blinkEyes();
    }, 3000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="home__img"
      style={{ backgroundImage: `url(${profileAnimated})` }}
    >
      <div className="eye" id="eye1">
        <div className="pupil" id="pupil1"></div>
        <div className="eyelid"></div>
      </div>
      <div className="eye" id="eye2">
        <div className="pupil" id="pupil2"></div>
        <div className="eyelid"></div>
      </div>
    </div>
  );
};

export default HomeImage;
