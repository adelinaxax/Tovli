import React, { useState } from 'react';
import './style.css';

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
        <img src="./assets/main_background.png" className="hero-background" alt="Фон" />
        <img src="./assets/main_decor1.svg" className="decor decor-1" alt="" />
        <img src="./assets/main_decor2.svg" className="decor decor-2" alt="" />
        <img src="./assets/main_left_arrow.svg" className="decor left_arrow" alt="" />
        <img src="./assets/main_right_arrow.svg" className="decor right_arrow" alt="" />
        <img src="./assets/sugar_text.svg" className="decor sugar_text" alt="" />
        <img src="./assets/carbs_text.svg" className="decor carbs" alt="" />
        <img src="./assets/pack.png" className="decor pack" alt="" />
        <img src="./assets/candy.png" className="decor candy" alt="" />
        <img src="./assets/peach.png" className="decor peach" alt="" />
        <img src="./assets/blueberry.png" className="decor blueberry" alt="" />
        <img src="./assets/apple.png" className="decor apple" alt="" />
        <img src="./assets/main_right_arrow_black.svg" className="decor right_arrow_black" alt="" />
        <img src="./assets/text_artif.svg" className="decor text2" alt="" />
        <img src="./assets/ellipse.svg" className="decor ellipse" alt="" />
        <img src="./assets/ellipse2.svg" className="decor ellipse2" alt="" />
        <img src="./assets/ellipse3.svg" className="decor ellipse3" alt="" />
        <img src="./assets/ellipse4.svg" className="decor ellipse4" alt="" />
        <img src="./assets/pics.svg" className="decor pics" alt="" />
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
