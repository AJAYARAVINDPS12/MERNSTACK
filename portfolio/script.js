// Smooth scrolling with offset adjustment
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const offsetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});

// Image modal functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Open modal on image click
document.getElementById('profile-photo').addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
});

// Close modal on close button click
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will get back to you at ${email} soon.`);
    this.reset();
});
