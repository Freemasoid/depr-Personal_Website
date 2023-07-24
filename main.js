const element = document.querySelector(".aboutMe");

window.addEventListener("scroll", reveal);

function reveal() {
  console.log(window.scrollY);
  if (window.scrollY >= 60) {
    element.style.opacity = 1;
  }
}

let mybutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
