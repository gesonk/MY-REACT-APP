import React from 'react'

const  Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>


      <div className="about__box">
        <i className="uil uil-file-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">10+ Completed</span>
      </div>

      <div className="about__box">
        <i className="uil uil-map-pin about__icon"></i>
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Hamilton,ON CA</span>
      </div>
    </div>
  )
}

export default Info