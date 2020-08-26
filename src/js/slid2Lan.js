TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay span", 2, {
    delay: -3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1,
    top:"-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".ellipse-container", 1, {
    delay:1,
    top: "-100%",
    ease: Expo.easeInOut
})
.TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".circle1", 1, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".menu-links ul li a", 1, {
    delay:3.2,
    opacity:0,
    x: -100,
    ease: Expo.easeInOut
}, 0.08)
TweenMax.from(".scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y:100,
    ease: Expo.easeInOut
})
