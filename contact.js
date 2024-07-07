document.getElementById('con').addEventListener('click', function() {
    var contactSection = document.getElementById('contact-section');
    contactSection.classList.add('visible');
    
    // Scroll to the contact section
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  