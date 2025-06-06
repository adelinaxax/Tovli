import React from 'react';
import './style.css';

import purple from '../../../assets/purple.svg';
import green from '../../../assets/green.svg';
import weirdo from '../../../assets/weirdo.png';
import weirdo2 from '../../../assets/weirdo2.png';
import paper from '../../../assets/paper.png';
import affiliates from '../../../assets/affiliates.svg';
import socialMedia from '../../../assets/social_media.svg';
import partnerships from '../../../assets/partnerships.svg';
import wholesale from '../../../assets/wholesale.svg';

const Banner: React.FC = () => {
  return (
    <section className="main-content">
      <div className="form-background"></div>
      <div className="decorative-elements">
        <img src={purple} className="purple" alt="Purple decor" />
        <img src={green} className="green" alt="Green decor" />
        <img src={weirdo} className="weirdo" alt="Weirdo decor" />
        <img src={weirdo2} className="weirdo2" alt="Weirdo 2 decor" />
        <img src={paper} className="paper" alt="Paper decor" />
      </div>
      <div className="contact-form-container">
        <div className="form-title">
          <span>Get in</span>
          <span className="highlight">Touch</span>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name*</label>
              <input type="text" placeholder="Enter your full name" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Email*</label>
              <input type="email" placeholder="Enter your email address" className="form-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Cell Number*</label>
              <input type="tel" placeholder="Enter your cell number" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Topic*</label>
              <select className="form-select">
                <option value="" disabled selected>Select topic</option>
              </select>
            </div>
          </div>
          <div className="form-group full-width">
            <label className="form-label">Message</label>
            <textarea placeholder="Enter the description" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="buttons submit-button">SUBMIT QUERY</button>
        </form>
        
        <div className="contacts-grid">
          <div className="contact-item">
            <img src={affiliates} alt="Affiliates" className="contact-icon" />
            <div>
              <div className="contact-title">Affiliates</div>
              <div className="contact-email">
                <span className="caveat">Affiliates</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src={socialMedia} alt="Social Media" className="contact-icon" />
            <div>
              <div className="contact-title">Social Media</div>
              <div className="contact-email">
                <span className="caveat">social</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src={partnerships} alt="Partnerships" className="contact-icon" />
            <div>
              <div className="contact-title">Partnerships</div>
              <div className="contact-email">
                <span className="caveat">contact</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src={wholesale} alt="Wholesale" className="contact-icon" />
            <div>
              <div className="contact-title">Wholesale</div>
              <div className="contact-email">
                <span className="caveat">wholesale</span>@tovlicandy.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
