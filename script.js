const giftCard = document.querySelector('.gift-card');

// Handle click and touch events
giftCard.addEventListener('click', () => {
    giftCard.classList.toggle('flipped');
});

giftCard.addEventListener('touchstart', () => {
    giftCard.classList.toggle('flipped');
});
