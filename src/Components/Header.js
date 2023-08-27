import React from 'react'
import facebook from '../Assets/facebook.svg';
import linkedIn from '../Assets/linkedIn.svg';
import tw from '../Assets/tw.svg';
import insta from '../Assets/insta.svg';
import car from '../Assets/car.svg';
import './Header.css'

const Header = () => {
  return (
    <div className="topcontainer">
    <div className="one">
      <div className="two">
        <div className="four">
          <img src={car} alt="" /> Free Delivery
        </div>
        <div className="five">Return Policy</div>
      </div>
      <div className="three">
        <div>Login</div>
        <div>follow Us</div>
        <div>
          <img className="socialimg" src={facebook} alt="facebook" />
        </div>
        <div>
          <img className="socialimg" src={linkedIn} alt="linkedIn" />
        </div>
        <div>
          <img className="socialimg" src={tw} alt="twitter" />
        </div>
        <div>
          <img className="socialimg" src={insta} alt="insta" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header