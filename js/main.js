const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'active' class from all other cards
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });

        // Toggle 'active' class on the clicked card
        card.classList.toggle('active');
    });
});

window.addEventListener('scroll', function () {
    var navbarHeight = document.getElementById('myNavbar').offsetHeight;
    var heroSection = document.getElementById('hero-section');
    heroSection.style.top = navbarHeight + 'px';
});