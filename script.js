const giftCard = document.querySelector('.gift-card');

// Track the flipping state
let isFlipped = false;

// Handle both click and touchstart events
function toggleFlip() {
    isFlipped = !isFlipped;
    if (isFlipped) {
        giftCard.classList.add('flipped');
    } else {
        giftCard.classList.remove('flipped');
    }
}

// Use `click` and `touchstart` to handle interactions
giftCard.addEventListener('click', toggleFlip);
giftCard.addEventListener('touchstart', (event) => {
    // Prevent multiple triggers by disabling the default behavior
    event.preventDefault();
    toggleFlip();
});
