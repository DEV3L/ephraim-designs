document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
          &copy; ${currentYear} Site built by Justin Beall from Dev3loper AI | AI-XP Engineer | 
          <a href="mailto:dev3loper.ai@gmail.com">dev3loper.ai@gmail.com</a> | 
          <a href="https://dev3loper.ai" target="_blank">dev3loper.ai</a>
  `;

  document.body.appendChild(footer);
});
