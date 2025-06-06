import React, { useState } from 'react';
import './style.css';

import mainBackground from '../../../assets/main_background.png';
import mainDecor1 from '../../../assets/main_decor1.svg';
import mainDecor2 from '../../../assets/main_decor2.svg';
import mainLeftArrow from '../../../assets/main_left_arrow.svg';
import mainRightArrow from '../../../assets/main_right_arrow.svg';
import sugarText from '../../../assets/sugar_text.svg';
import carbsText from '../../../assets/carbs_text.svg';
import pack from '../../../assets/pack.png';
import candy from '../../../assets/candy.png';
import peach from '../../../assets/peach.png';
import blueberry from '../../../assets/blueberry.png';
import apple from '../../../assets/apple.png';
import mainRightArrowBlack from '../../../assets/main_right_arrow_black.svg';
import textArtif from '../../../assets/text_artif.svg';
import ellipse from '../../../assets/ellipse.svg';
import ellipse2 from '../../../assets/ellipse2.svg';
import ellipse3 from '../../../assets/ellipse3.svg';
import ellipse4 from '../../../assets/ellipse4.svg';
import pics from '../../../assets/pics.svg';

const Banner: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const animateButton = (element: HTMLElement, scale: number, duration: number) => {
    element.style.transform = `scale(${scale})`;
    element.style.transition = `transform ${duration}ms ease`;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsPressed(true);
    animateButton(e.currentTarget, 0.95, 100);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPressed) {
      animateButton(e.currentTarget, 1, 200);
      setIsPressed(false);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPressed) {
      animateButton(e.currentTarget, 1, 150);
      setIsPressed(false);
    }
  };

  return (
    <section className="hero-main">
      <div>
        <img src={mainBackground} className="hero-background" alt="Фон" />
        <img src={mainDecor1} className="decor decor-1" alt="" />
        <img src={mainDecor2} className="decor decor-2" alt="" />
        <img src={mainLeftArrow} className="decor left_arrow" alt="" />
        <img src={mainRightArrow} className="decor right_arrow" alt="" />
        <img src={sugarText} className="decor sugar_text" alt="" />
        <img src={carbsText} className="decor carbs" alt="" />
        <img src={pack} className="decor pack" alt="" />
        <img src={candy} className="decor candy" alt="" />
        <img src={peach} className="decor peach" alt="" />
        <img src={blueberry} className="decor blueberry" alt="" />
        <img src={apple} className="decor apple" alt="" />
        <img src={mainRightArrowBlack} className="decor right_arrow_black" alt="" />
        <img src={textArtif} className="decor text2" alt="" />
        <img src={ellipse} className="decor ellipse" alt="" />
        <img src={ellipse2} className="decor ellipse2" alt="" />
        <img src={ellipse3} className="decor ellipse3" alt="" />
        <img src={ellipse4} className="decor ellipse4" alt="" />
        <img src={pics} className="decor pics" alt="" />
      </div>

      <a
        href="shop.html"
        className="buttons hero-button"
        id="actionButton"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        role="button"
      >
        Shop now
      </a>

      <div className="hero-description">
        <div className="future-text-block">
          The future is
        </div>
        <div className="healthy-text-block">
          Healthy, Sweet & <br /> Inclusive
        </div>
      </div>
    </section>
  );
};

export default Banner;
