document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("[onclick='toggleNav()']");
  const mobileNav = document.getElementById("mobileNav");

  window.toggleNav = function () {
    mobileNav.classList.toggle("hidden");
  };

  document.addEventListener("click", (e) => {
    if (
      !mobileNav.classList.contains("hidden") &&
      !mobileNav.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      mobileNav.classList.add("hidden");
    }
  });
});
