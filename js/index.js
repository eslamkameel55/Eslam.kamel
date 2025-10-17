const menuIcon = document.querySelector(".menu-item");

menuIcon.addEventListener("click", () => {
  menuIcon.firstElementChild.checked
    ? (menuIcon.nextElementSibling.style.height = 215 + "px")
    : (menuIcon.nextElementSibling.style.height = 0 + "px");
});

// Get All Main Sections
const sections = Array.from(
  document.querySelectorAll(
    "section.hero , section.case-study ,section.testimonials , section.contact , section.recent-work"
  )
);

const progressBar = document.querySelector(
  ".progress-bar-container .progress-bar"
);

const updateProgressBar = () => {
  let activeSection = 0;
  let scrollY = window.scrollY + window.innerHeight / 2;
  sections.forEach((section, idx) => {
    if (scrollY >= section.offsetTop) activeSection = idx;
  });

  const totalSteps = sections.length;
  const percent = ((activeSection + 1) / totalSteps) * 100;

  console.log(percent);

  progressBar.style.height = percent + "%";
};

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
document.addEventListener("DOMContentLoaded", updateProgressBar);
