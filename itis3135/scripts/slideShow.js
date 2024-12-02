$(document).ready(function () {
    let currentIndex = 0; 
    const slides = $('.slide'); 
    const thumbnails = $('.thumbnail'); 

    function showSlide(index) {
        slides.hide();
        thumbnails.removeClass('active');

        $(slides[index]).fadeIn();
        $(thumbnails[index]).addClass('active');    
    }

    showSlide(currentIndex);

    thumbnails.click(function () {
        const index = $(this).data('index');
        currentIndex = index;
        showSlide(currentIndex);
    });

    $(document).keydown(function (e) {
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    });
});
