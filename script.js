// Make sure locomotive-scroll.min.js is loaded before this script

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

window.addEventListener("load", locomotiveAnimation);

function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "23vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,

      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,

      stagger: {
        amount: 0.2,
      },
    });

    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function page2Animation() {
  const rightElems = document.querySelectorAll(".right-elem");
  const rElemImg = document.querySelector("#right-elem1 img");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0.8,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (e) {
      gsap.to(elem.childNodes[3], {
        x: e.x - elem.getBoundingClientRect().x - 50,
        y: e.y - elem.getBoundingClientRect().y - 95,
      });
    });
  });
}

function page3VideoAnimation() {
  const page3center = document.querySelector(".page3-center");
  const video = document.querySelector("#page3 video");

  page3center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function sectionRight() {
  const sections = document.querySelectorAll(".section-right");

  sections.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page4Animation() {
  const rightsElems = document.querySelectorAll(".section-right");
  rightsElems.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[5], {
        opacity: 0.8,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[5], {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
      elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem.childNodes[5], {
          duration: 0.7,
          delay: 0.01,
          x: dets.x - elem.getBoundingClientRect().x - 1000,
          y: dets.y - elem.getBoundingClientRect().y - 10,
        });
      });
    });
  });
}

function page6ScrollerAnimation() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "#main",
      start: "top 80%",
      end: "top 10% ",
      scrub: true,
    },
  });
}

function loadingAnimation() {
  const tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.1) translateY(80%)",
    borderRadius: "100px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    transform: "scaleX(0.7) scaleY(0.8) translateY(55%)",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

loadingAnimation();
locomotiveAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
sectionRight();
page4Animation();
page6ScrollerAnimation();
