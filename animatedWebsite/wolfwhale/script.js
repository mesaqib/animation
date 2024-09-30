

let tl = gsap.timeline();

tl.to("#loader", {
  x: "100vw",
  duration: 2,
});
tl.to("#loader", {
  delay: 0.3,
  y: "-100vh",
  duration: 1,
});

let myCursor = document.querySelector("#cursor");
let mainContent = document.querySelector("#main");

mainContent.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
  });
});

let linkTag = document.querySelector(".hoverMouse");

linkTag.addEventListener("mouseover", function () {
  myCursor.style.backgroundColor = "#0800ff5f";
  myCursor.style.height = "40px";
  myCursor.style.width = "40px";
  myCursor.style.transition = "0.2s";
});
linkTag.addEventListener("mouseout", function () {
  myCursor.style.backgroundColor = "#0700FF";
  myCursor.style.height = "30px";
  myCursor.style.width = "30px";
});



tl.to(".hide-text h1", {
    y: "-10px",
    duration: 1,
    delay: 0.4
})