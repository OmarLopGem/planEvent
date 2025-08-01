'use strict';

$(function() {

    function updateCarousel() {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $center.removeClass('img-center').addClass('img-left');
        $left.removeClass('img-left').addClass('img-right');
        $right.removeClass('img-right').addClass('img-center');
    }

    $('#hero-images').on('click','.img-left', function() {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $left.removeClass('img-left').addClass('img-center');
        $center.removeClass('img-center').addClass('img-right');
        $right.removeClass('img-right').addClass('img-left');
    });

    $('#hero-images').on('click', '.img-right',function() {
        let $left = $('.img-left');
        let $center = $('.img-center');
        let $right = $('.img-right');
        $right.removeClass('img-right').addClass('img-center');
        $center.removeClass('img-center').addClass('img-left');
        $left.removeClass('img-left').addClass('img-right');
    });
});