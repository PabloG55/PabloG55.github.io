// Waits for the DOM to load before executing any code
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');
  var scrollThreshold = 50; // Set scroll threshold for header change

  // Adds an event listener for scrolling
  window.addEventListener('scroll', function() {
      // If the scroll position is greater than the threshold, add the 'scrolled' class
      if (window.scrollY > scrollThreshold) {
          header.classList.add('scrolled');
      } else {
          // Remove the 'scrolled' class when below the threshold
          header.classList.remove('scrolled');
      }
  });
});

// Slideshow code that waits for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slideshow img');

  function showSlides() {
      // Loop through and hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }

      // Increment the slide index to move to the next slide
      slideIndex++;

      // Reset to the first slide if the index exceeds the number of slides
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      // Display the current slide
      slides[slideIndex - 1].style.display = 'block';

      // Automatically call `showSlides` every 5 seconds to change slides
      setTimeout(showSlides, 5000);
  }

  // Start the slideshow
  showSlides();
});

// Code for an interactive image carousel
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.image-carousel');
  const images = carousel.querySelectorAll('img');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  let currentIndex = 0;

  // Function to display the current image based on index
  function showImage(index) {
      images.forEach((img, i) => {
          if (i === index) {
              img.classList.add('active');
          } else {
              img.classList.remove('active');
          }
      });
  }

  // Move to the next image
  function nextImage() {
      currentIndex = (currentIndex + 1) % images.length; // Loop back to start if at the end
      showImage(currentIndex);
  }

  // Move to the previous image
  function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to end if at start
      showImage(currentIndex);
  }

  // Attach click event listeners to the buttons
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  // Show the first image initially
  showImage(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
  // Selects the "View Products" and "Learn More" buttons by their IDs
  const viewProductsBtn = document.getElementById('view-products-btn');
  const learnMoreBtn = document.getElementById('learn-more-btn');

  // Adds event listener to the "View Products" button to navigate to 'products.html' on click
  viewProductsBtn.addEventListener('click', function() {
    window.location.href = 'products.html';
  });

  // Adds event listener to the "Learn More" button to navigate to 'products.html' on click
  learnMoreBtn.addEventListener('click', function() {
    window.location.href = 'products.html';
  });
});
