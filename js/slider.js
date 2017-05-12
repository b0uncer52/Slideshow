"use strict";
let slide = 1;
var t;

let currentSlide = (index) => {
	slide = index;
	rotateSlides();
};

let changeSlide = (val) => {
	slide += val;
	if(slide === 0) {slide = 7;}
	if(slide === 8) {slide = 1;}
	rotateSlides();
};
let rotateSlides = () => {
	clearTimeout(t);
	$('#frontimg').fadeOut(0);
	let image = `url(../img/img${slide}.jpg)`;
	$('#slideshow').css("background-image", image);
	t = setTimeout(() => {
		slide++;
		if(slide > 7) {slide = 1;}
		image = `url(../img/img${slide}.jpg)`;
		$('#frontimg').css("background-image", image).fadeIn(1000);
		t = setTimeout(rotateSlides, 2000);
	}, 2000);

	// if(slide > 7) {slide = 1;}
	// let slide2 = slide + 1;
	// if(slide2 > 7) {slide2 = 1;}
 //    clearTimeout(t);
 //    let image = `url(../img/img${slide}.jpg)`;
 //    let image2 = `url(../img/img${slide2}.jpg)`;
 //    $('#slideshow').css("background-image", image);
 //    $('#frontimg').css("background-image", image2).fadeIn(2000);
 //    t = setTimeout(() => {
 //    	slide++;
 //    	$("#frontimg").fadeOut(0);
 //    	rotateSlides();
	// }, 3000);
};

module.exports = {currentSlide, changeSlide, rotateSlides};