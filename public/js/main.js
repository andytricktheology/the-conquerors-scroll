document.addEventListener("DOMContentLoaded", () => {
  const headlines = [
    "Unlocking Biblical Secrets",
    "Unsealing Biblical Secrets",
    "Unlocking Biblical Truths",
    "Exposing Theological Tricks",
    "Liberating the Masses"
  ];
  const h1 = document.getElementById("animated-headline");
  let index = 0;

  function animateHeadline() {
    h1.style.opacity = 0;
    setTimeout(() => {
      h1.textContent = headlines[index];
      h1.style.opacity = 1;
      index = (index + 1) % headlines.length;
    }, 500);
  }

  setInterval(animateHeadline, 4000);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      localStorage.theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    });

    if (localStorage.theme === 'light') document.documentElement.classList.add('light');
  }
});