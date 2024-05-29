import React from 'react'
import './Footer.moudle.css'
function Footer() {
  return (
    <div>


<div className="footer-content">
  <div className="footer">
    <div className="sec">
      <h4>About us</h4>
      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am
        text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
      <p>We are the champions! We are the most amazing theme of all time, yeah.</p>
    </div>
    
    <div className="sec">
      <h4>Contact Details</h4>
      <ul>
        <li className="e">
          <i className="fa-solid fa-location-dot" />
          <p>Manchester Road 123-78B, Silictown 7854MD, Great Country</p>
        </li>
        <li className="e">
          <i className="fa fa-phone" />
          <a href="#">+46 123 456 789</a>
        </li>
        <li className="e">
          <i className="fa fa-envelope" />
          <a href="#">hello@sitename.com</a>
        </li>
        <li className="e no">
          <i className="fa fa-globe" />
          <a href="#">http://www.sitename.com</a>
        </li>
      </ul>
    </div>
    <div className="clear" />
    
  </div> <span>Copyright 2017. All rights reserved</span>
  <div className="end-end">
   <div className="end">
      <ul>
        <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
        <li><a href="# "><i className="fa-brands fa-google" /></a></li>
        <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
        <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
    
      </ul>
      <div className="clear" />
    </div>
  </div>
</div>


    </div>
  )
}

export default Footer