const animateButton = (button: HTMLButtonElement, scale: number, duration: number) => {
    button.style.transform = `scale(${scale})`;
    button.style.transition = `transform ${duration}ms ease`;
};

/**
 * Инициализация анимации кнопки
 * @param button HTML-элемент кнопки
 */
export function initMainBanner(button: HTMLButtonElement) {
    let isPressed = false;

    button.addEventListener('mousedown', () => {
        isPressed = true;
        animateButton(button, 0.95, 100);
    });

    button.addEventListener('mouseup', () => {
        if (isPressed) {
            animateButton(button, 1, 200);
            isPressed = false;
        }
    });

    button.addEventListener('mouseleave', () => {
        if (isPressed) {
            animateButton(button, 1, 150);
            isPressed = false;
        }
    });
}