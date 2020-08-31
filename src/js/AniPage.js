const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".logo");
const headline = document.querySelector(".headline");
const burger = document.getElementById("#burger");

const t1 = new TimelineMax();
t1.fromTo(hero, 1, {height: "0%"}, {height: "80%"});