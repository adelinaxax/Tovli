import './styles/style.css';
import { initMainBanner } from './components/main-banner/main-banner';

const mainButton = document.querySelector<HTMLButtonElement>('.hero-button');
if (mainButton) {
    initMainBanner(mainButton);
}

document.querySelectorAll('.footer-title').forEach(button => {
  button.addEventListener('click', () => {
    const column = button.closest('.footer-column');
    column?.classList.toggle('open');
    
    // Анимация плюсика
    const toggle = button.querySelector('.footer-toggle');
    if (toggle) {
      toggle.textContent = column?.classList.contains('open') ? '−' : '+';
    }
  });
});

