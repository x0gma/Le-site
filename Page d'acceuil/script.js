const pp = document.querySelector(".pp");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navBar.style.top = "-100px";
  } else {
    navBar.style.top = 0;
  }
  lastScroll = window.scrollY;
});

pp.addEventListener("mousedown", () => {
  pp.classList.remove("pp");
  pp.classList.add("pp2");

  const audio = new Audio();
  audio.src = "./assets/audio/minevil.mp3";
  audio.play();
});

pp.addEventListener("mouseup", () => {
  pp.classList.remove("pp2");
  pp.classList.add("pp");
});
