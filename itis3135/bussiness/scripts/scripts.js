//Scroll
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

//Slideshow
$(document).ready(function () {
  let currentIndex = 0; 
  const slides = $('.slideshow .slide'); 

  function showSlide(index) {
      // Hide all slides
      slides.hide();

      // Fade in the current slide
      $(slides[index]).fadeIn();
  }

  function startSlideshow() {
      showSlide(currentIndex);

      setInterval(function () {
          // Increment the index and loop back to the first slide if needed
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }, 5000); // Change slide every 5 seconds
  }

  // Start the slideshow
  startSlideshow();
});


//Carousel
$(document).ready(function () {
  const $carousel = $('.image-carousel');
  const $images = $carousel.find('img');
  const $prevArrow = $carousel.find('.prev-arrow');
  const $nextArrow = $carousel.find('.next-arrow');
  let currentIndex = 0;

  // Function to display the current image based on index
  function showImage(index) {
      $images.removeClass('active').hide(); // Hide all images
      $($images[index]).fadeIn().addClass('active'); // Show the current image
  }

  // Move to the next image
  function nextImage() {
      currentIndex = (currentIndex + 1) % $images.length; // Loop back to start if at the end
      showImage(currentIndex);
  }

  // Move to the previous image
  function prevImage() {
      currentIndex = (currentIndex - 1 + $images.length) % $images.length; // Loop back to end if at start
      showImage(currentIndex);
  }

  // Event listeners for arrow clicks
  $prevArrow.click(prevImage);
  $nextArrow.click(nextImage);

  // Keyboard event listener for arrow keys
  $(document).keydown(function (e) {
      if (e.key === 'ArrowRight') {
          nextImage(); // Navigate to the next image on → arrow
      } else if (e.key === 'ArrowLeft') {
          prevImage(); // Navigate to the previous image on ← arrow
      }
  });

  // Show the first image initially
  showImage(currentIndex);
});

//Change Page
document.addEventListener('DOMContentLoaded', function() {
  // Selects the "View Products" and "Learn More" buttons by their IDs
  const viewProductsBtn = document.getElementById('view-products-btn');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const buyNowBtn = document.getElementById('buy-now-btn');

  // Adds event listener to the "View Products" button to navigate to 'products.html' on click
  viewProductsBtn.addEventListener('click', function() {
    window.location.href = 'products.html';
  });

  // Adds event listener to the "Learn More" button to navigate to 'about.html' on click
  learnMoreBtn.addEventListener('click', function() {
    window.location.href = 'about.html';
  });

  // Adds event listener to the "Buy Now" button to navigate to 'contact.html' on click
  buyNowBtn.addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
});
