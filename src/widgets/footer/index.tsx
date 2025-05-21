import React, { useEffect } from 'react';
import './footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    const setupFooterAnimation = () => {
      document.querySelectorAll('.footer-title').forEach(button => {
        button.addEventListener('click', () => {
          const column = button.closest('.footer-column');
          column?.classList.toggle('open');
          
          const toggle = button.querySelector('.footer-toggle');
          if (toggle) {
            toggle.textContent = column?.classList.contains('open') ? '−' : '+';
          }
        });
      });
    };

    setupFooterAnimation();
    
    return () => {
      // Очистка при размонтировании
      document.querySelectorAll('.footer-title').forEach(button => {
        button.replaceWith(button.cloneNode(true));
      });
    };
  }, []);

  return (
    <footer>
        <div className="footer-top">
            <input type="email" className="footer-email" placeholder="Your Email"/>
            <button className="footer-newsletter">Sign Up To Our Newsletter →</button>
        </div>
        <div className="footer-links">
            <div className="footer-column">
                <button className="footer-title" type="button">Shop & Learn <span className="footer-toggle">+</span></button>
                <div className="footer-dropdown">
                    <div>Shop all</div>
                    <div>New Arrivals</div>
                    <div>Best Sellers</div>
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-column">
                <button className="footer-title" type="button">Information <span className="footer-toggle">+</span></button>
                <div className="footer-dropdown">
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Press</div>
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-column">
                <button className="footer-title" type="button">Help <span className="footer-toggle">+</span></button>
                <div className="footer-dropdown">
                    <div>Contact</div>
                    <div>FAQ</div>
                    <div>Shipping & Returns</div>
                </div>
            </div>
        </div>
    </footer>

  );
};

export default Footer;
