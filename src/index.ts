import './styles/style.css';
import { initMainBanner } from './components/main-banner/main-banner';

const mainButton = document.querySelector<HTMLButtonElement>('.hero-button');
if (mainButton) {
    initMainBanner(mainButton);
}