const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const themeIcon = document.querySelector(".theme-icon");

themeToggle.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light-theme");

  themeToggle.setAttribute("aria-pressed", String(isLightTheme));
  themeLabel.textContent = isLightTheme ? "Tema terang" : "Ganti tema";
  themeIcon.textContent = isLightTheme ? "☾" : "☼";
});
