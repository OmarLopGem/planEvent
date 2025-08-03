'use strict';

$(function () {

    function updateCarousel() {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $center.removeClass('img-center').addClass('img-left');
        $left.removeClass('img-left').addClass('img-right');
        $right.removeClass('img-right').addClass('img-center');
    }

    $('#hero-images').on('click', '.img-left', function () {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $left.removeClass('img-left').addClass('img-center');
        $center.removeClass('img-center').addClass('img-right');
        $right.removeClass('img-right').addClass('img-left');
    });

    $('#hero-images').on('click', '.img-right', function () {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $right.removeClass('img-right').addClass('img-center');
        $center.removeClass('img-center').addClass('img-left');
        $left.removeClass('img-left').addClass('img-right');
    });

    function showErrorMsg($element, message) {
        // Flicker effect
        let flickerCount = 0;
        let timer;
        function flicker() {
            $element.toggleClass('red-border');
            flickerCount++;
            if (flickerCount < 6) { // Flicker 3 times (add/remove)
                timer = setTimeout(flicker, 100);
            } else {
                $element.removeClass('red-border'); // Ensure it's removed at the end
                clearTimeout(timer);
            }
        }
        flicker();
        // Show error message
        const $errorMsg = $('<p class="error-message"></p>');
        $errorMsg.text(message);
        $element.next().after($errorMsg);
        $errorMsg.hide();
        $errorMsg.slideDown(1000, "easeOutExpo");
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    $('#rsvp-form button').on('click', function (event) {
        event.preventDefault();
        // Remove previous error messages
        $('#rsvp-form .error-message').remove();
        // check if name and email are filled
        let name = $('#name').val().trim();
        if (name === '') {
            showErrorMsg($('#name'), 'Name is required.');
        }

        let email = $('#email').val().trim();
        if (email === '' || !isValidEmail(email)) {
            showErrorMsg($('#email'), 'Valid email is required.');
        }

    });

    $('#rsvp-form input').on('change', function (event) {
        event.preventDefault();
        // Remove previous error messages
        $(event.target).nextAll('.error-message').first().slideUp(500, "easeInExpo");
    });

});