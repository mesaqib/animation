let tl = gsap.timeline()


tl.from(".navbar > .logo, .navbar ul li, .navbar .btns button", {
    y: -100,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3
})

tl.from(".main h1", {
    y: 200,
    duration: 1,
    delay: 0.2,
    stargger: 0.3,
    opacity: 0
})

tl.from(".main img", {
    scale: 0,
    duration: 1,
  delay: 0.2,
  stargger: 0.2,
  opacity: 0,
});