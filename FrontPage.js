document.querySelector(".fa-dribbble").classList.add("fa-angle-right");
document.querySelector(".fa-dribbble").classList.remove("fa-dribbble");

setTimeout(() => {
  document
    .querySelector(".dribbble")
    .setAttribute("data-original-title", "next-insight");
  document.querySelector(".fa-dribbble").classList.add("fa-angle-right");
  document.querySelector(".fa-dribbble").classList.remove("fa-dribbble");
}, 1000);
