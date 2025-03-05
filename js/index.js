const nav = document.querySelector(".nav");
const btn = document.querySelector(".btn");

const handleClass = () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
};

btn.addEventListener("click", handleClass);

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent + "%";
  });
});
