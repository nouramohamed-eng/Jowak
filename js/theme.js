const THEME_STORAGE_KEY = "jowak-theme";
const LIGHT_THEME_CLASS = "light-theme";

function applyTheme(theme) {
  document.body.classList.toggle(LIGHT_THEME_CLASS, theme === "light");
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem(THEME_STORAGE_KEY) || "dark");

  const toggleButton = document.querySelector(".toggle-button");
  if (!toggleButton) return;

  toggleButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains(LIGHT_THEME_CLASS)
      ? "dark"
      : "light";

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
});

window.addEventListener("storage", (event) => {
  if (event.key === THEME_STORAGE_KEY) {
    applyTheme(event.newValue || "dark");
  }
});
