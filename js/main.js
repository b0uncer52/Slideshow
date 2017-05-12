"use strict";

let slider = require("./slider");

let master = $("#master-wrapper")[0];

let activateButtons = function() {
	$(".dot").on("click", function(event){
		let id = (this.id).replace("id", "");
		slider.currentSlide(id);
	});
	$(".prev").on("click", function(event){
		slider.changeSlide(-1);
	});
	$(".next").on("click", function(event) {
		slider.changeSlide(1);
	});
	slider.rotateSlides();
};

$("#start")[0].addEventListener("click", () => {
	$("#slideshow").toggleClass("hide");
	$("#start").toggleClass("hide");
	activateButtons();
});
console.log(master);


