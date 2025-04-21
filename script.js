// Smooth scroll to enroll section
function scrollToEnroll() {
    document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' });
}

// Optional: Add a simple animation to the CTA button on hover
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});