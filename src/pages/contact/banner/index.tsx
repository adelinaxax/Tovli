import React from 'react';
import './style.css';

const Banner: React.FC = () => {
  return (
    <section className="main-content">
      <div className="form-background"></div>
      <div className="decorative-elements">
        <img src="assets/purple.svg" className="purple" alt="Purple decor" />
        <img src="assets/green.svg" className="green" alt="Green decor" />
        <img src="assets/weirdo.png" className="weirdo" alt="Weirdo decor" />
        <img src="assets/weirdo2.png" className="weirdo2" alt="Weirdo 2 decor" />
        <img src="assets/paper.png" className="paper" alt="Paper decor" />
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
            <img src="assets/affiliates.svg" alt="Affiliates" className="contact-icon" />
            <div>
              <div className="contact-title">Affiliates</div>
              <div className="contact-email">
                <span className="caveat">Affiliates</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src="assets/social_media.svg" alt="Social Media" className="contact-icon" />
            <div>
              <div className="contact-title">Social Media</div>
              <div className="contact-email">
                <span className="caveat">social</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src="assets/partnerships.svg" alt="Partnerships" className="contact-icon" />
            <div>
              <div className="contact-title">Partnerships</div>
              <div className="contact-email">
                <span className="caveat">contact</span>@tovlicandy.com
              </div>
            </div>
          </div>
          <div className="contact-item">
            <img src="assets/wholesale.svg" alt="Wholesale" className="contact-icon" />
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
