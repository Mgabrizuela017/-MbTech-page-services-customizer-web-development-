const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Configuración partículas por tema
const particlesDark = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#4db8ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4db8ff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  },
  retina_detect: true
};

const particlesLight = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6a11cb" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6a11cb",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  },
  retina_detect: true
};

// Función para recargar partículas
function loadParticles(config) {
  // Si ya existe un canvas, lo borro
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  particlesJS("particles-js", config);
}

// Inicial: dark mode
loadParticles(particlesDark);

// Toggle tema + partículas
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
    loadParticles(particlesLight);
  } else {
    toggleBtn.textContent = "🌙";
    loadParticles(particlesDark);
  }
});
