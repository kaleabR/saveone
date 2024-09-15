document.addEventListener('DOMContentLoaded', function() {
    // Initialize Hero Image Carousel
    $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: false
    });

    // Smooth Scroll to Section when a menu item is clicked
    $('.navbar a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            // Store hash
            var hash = this.hash;

            // Use jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});