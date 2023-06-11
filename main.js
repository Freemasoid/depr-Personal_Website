const element = document.querySelector(".aboutMe");

window.addEventListener("scroll", reveal);

function reveal() {
  console.log(window.scrollY);
  if (window.scrollY >= 40) {
    element.style.opacity = 1;
  }
}
