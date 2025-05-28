window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);

  toggle.textContent = savedTheme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode";

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    toggle.textContent = theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode";
  });
});
