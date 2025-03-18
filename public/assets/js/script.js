document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
    });
  });
});

function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
}

loadHTML("profile-container", "profile.html");
loadHTML("about-container", "about.html");
loadHTML("experience-container", "experience.html");
loadHTML("projects-container", "projects.html");
loadHTML("contact-container", "contact.html");