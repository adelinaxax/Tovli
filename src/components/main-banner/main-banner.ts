
const button = document.querySelector('.hero-button') as HTMLAnchorElement;

if (button) {
    const originalTransform = button.style.transform;
    const originalBoxShadow = button.style.boxShadow;

    const pressButton = () => {
        button.style.transform = 'translateY(2px)';
        button.style.boxShadow = '0 1px 1px rgba(0,0,0,0.1)';
        button.style.transition = 'all 0.1s ease';
    };

    const releaseButton = () => {
        button.style.transform = originalTransform;
        button.style.boxShadow = originalBoxShadow;
    };

    button.addEventListener('mousedown', pressButton);
    button.addEventListener('mouseup', releaseButton);
    button.addEventListener('mouseleave', releaseButton);

    button.addEventListener('touchstart', pressButton);
    button.addEventListener('touchend', releaseButton);
}