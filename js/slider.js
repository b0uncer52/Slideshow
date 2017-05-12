"use strict";
let slide = 1;
var t;

let currentSlide = (index) => {
	slide = index;
	rotateSlides();
};

let changeSlide = (val) => {
	slide += val;
	rotateSlides();
};
let rotateSlides = () => {
    clearTimeout(t);
	$('#slideshow').fadeIn(1000);
    let image = `url(../img/img${slide}.jpg)`;
    $('#slideshow').css("background-image", image).fadeOut(1000);
    t = setTimeout(() => {
    	slide++;
    	if(slide > 7) {slide = 1;}
    	rotateSlides();
	}, 3000);
};

module.exports = {currentSlide, changeSlide, rotateSlides};