import React from 'react'
import hero from '../Assets/jessica-radanavong-IchPBHFD0pw-unsplash.png'
import BackRing from '../Assets/BackRing.svg'
import Star from '../Assets/Star.png'
import arrow from '../Assets/arrow.png'
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="mainbox">
      <div className="box">
        <div className="box-1">
          <h1 className="fresh"> Fresh</h1>
          <h1 className="num">2022</h1>
          <h1 className="look">Look</h1>
        </div>
        <div className="box-2">
          <img className="image-1" src={BackRing} alt="" />
          <img className="image-2" src={hero} alt="" />
        </div>
      </div>
      <div className="orangebox"></div>
      <div className="line"></div>
      <img className="image-3" src={Star} alt="star" />
      <div className="see">
        <div className="seemore">See more</div>
      </div>
      <img className="img" src={arrow} alt="arrow" />
    </div>
  )
}

export default HeroBanner