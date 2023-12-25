//coded by @zaidik
$(document).ready(function () {
    const themeSwitch = document.querySelector("#checkbox");
    themeSwitch.addEventListener("change", () => {
      document.body.classList.toggle("dark-theme");
    });
  });