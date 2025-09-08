// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// "Hire Me" button action
document.getElementById('hireMeBtn').addEventListener('click', () => {
  alert('Thank you for your interest! Please scroll down to contact me.');
});

// Contact form (basic validation + success message)
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your message has been sent successfully!');
});
