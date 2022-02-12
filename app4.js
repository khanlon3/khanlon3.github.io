const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const headline = document.querySelector(".headline");
const info = document.querySelector(".info");
const slideshow = document.querySelector(".slideshow");

const t1 = new TimelineMax();


t1.fromTo(slider, 1.2, {x: "100%"}, {x:'0%',ease:Power2.easeInOut},"-=1.2")
.fromTo(logo, .5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=.6")
.fromTo(menu, .5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=.6")



