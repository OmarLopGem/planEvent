"use strict";

const $ = selector => document.querySelector(selector);

const imageCache = [];

let imageCounter = 0;

function showImage(){
    const mainImage = $("#main-photo");
    const image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
}

function buttonListeners() {
    const left = $("#left");
    const right = $("#right");

    left.addEventListener("click", () => {
        imageCounter = (imageCounter - 1 + imageCache.length) % imageCache.length;
        showImage(); 
    })

    right.addEventListener("click", () => {
        imageCounter = (imageCounter + 1) % imageCache.length;
        showImage();
    });
}

function startShow() {
    document.querySelectorAll("#slider-images img").forEach(img => {
        const image = new Image();
        image.src = img.getAttribute("src");
        image.alt = img.getAttribute("alt");

        imageCache.push(image);
    });

    setInterval(() => {
        imageCounter = (imageCounter + 1) % imageCache.length;

        showImage();
    }, 2000)
};

document.addEventListener("DOMContentLoaded", () => {
    buttonListeners();
    startShow();
});