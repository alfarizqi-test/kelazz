document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("button[onclick]");
  const mobileNav = document.getElementById("mobileNav");

  // toggle menu
  window.toggleNav = function () {
    mobileNav.classList.toggle("hidden");
  };

  // klik di luar menu → tutup
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !toggleButton.contains(e.target)) {
      mobileNav.classList.add("hidden");
    }
  });
});
