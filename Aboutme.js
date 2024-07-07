document.querySelector('.click-me-button').addEventListener('click', function() {
    var button = this;
    var content = document.querySelector('.hidden-content');
    
    // Add the "clicked" class to trigger the animation
    button.classList.add('clicked');
  
    // Display the hidden content after a delay
    setTimeout(function() {
      content.style.display = 'block';
    }, 2000); // Adjust the delay time as needed
  });
  