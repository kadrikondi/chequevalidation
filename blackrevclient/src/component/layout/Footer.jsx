import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              {/* <div className="row">
                <div className="col-lg-4 col-md-6 footer-contact">
                  <h3>The Blackman's Revolution</h3>
                  <p>
                   



                   
                    <strong>Email:</strong> info@theblackmanrevolution.com<br />
                                          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; theblackmanrevolution@gmail.com <br/>
                     <strong> <Link to="/contactus">  Contact Us</Link></strong> 

                  </p>
                </div>
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                      
  
   



                    <li><i className="bx bx-chevron-right" /> <Link to="/about">  Our mission</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/aimandobj"> Aim and Objectives</Link></li>
                    <li><i className="bx bx-chevron-right" /> <a  href="https://www.amazon.com/dp/B09GTMJY9Q" target ="_blank" rel="noreferrer"> Download The Book: It's Time For the Blackman's Revolution</a>
                    <ul>
                      <li><a target ="_blank" href="https://www.smashwords.com/books/view/1105564" rel="noreferrer">Download on SmashWords</a></li>
                      <li><a  href="https://www.amazon.com/dp/B09GTMJY9Q" target ="_blank" rel="noreferrer"> Download On Amazon</a></li>
                    </ul>
                    </li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/volunteer">     Become a Volunteer
   </Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="voluteer"> Become community Organizer</Link></li>
                  </ul>
                </div>
               
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Follow Us </h4>
                 <div className="social-links ">
              <Link to="#" className="twitter"><i className="bx bxl-twitter" /><FaTwitter/></Link>
              <a href="https://www.facebook.com/theblackmansrevolution/" className="facebook"><i className="bx bxl-facebook" /><FaFacebook/></a>
              <Link to="#" className="instagram"><i className="bx bxl-instagram" /><FaInstagram/></Link>
              <a href="https://www.youtube.com/channel/UC3VEdtuSCCwRooTYT6yqciA" className="google-plus"><i className="bx bxl-skype" /><FaYoutube/></a>
             
            </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="mr-md-auto text-center text-md-left">
              <div className="copyright">
                &copy; {new Date().getFullYear()} &nbsp;
                <strong>
                  <span>Cheque Clearance and Validation</span>
                </strong>
                . By Frank All Rights Reserved
              </div>
              <div className="credits"></div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        <Link to="#" className="back-to-top">
          <i className="icofont-simple-up" />
        </Link>
      </div>
    );
  }
}
