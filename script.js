
// =========================================================
const PROJECTS = [
  {
    name: "VeteControl",
    file: "VeteControl.tsx",
    ext: "TSX",
    desc: "Plataforma B2B SaaS para clínicas veterinarias. Diseñé el esquema de base de datos para fichas de mascotas e historiales, con carnet digital y QR por mascota, alerta SOS para mascotas perdidas, control de stock de stickers QR y cambio de contraseña autoservicio.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Vercel"],
    repo: "",
    repoNote: "Código privado",
    demo: "",
    shot: "assets/projects/vetecontrol.png"
  },
  {
    name: "Automatización de Inventario (SII)",
    file: "automatizacion-sii.php",
    ext: "PHP",
    desc: "Herramienta que automatiza la importación de inventario para minimarkets chilenos: procesa facturas electrónicas XML del SII y las estructura directo en base de datos, eliminando la digitación manual de stock.",
    stack: ["PHP", "Astro", "Python", "MySQL"],
    repo: "",
    repoNote: "Código privado",
    demo: "",
    shot: "assets/projects/automatizacion-pos.png"
  },
  {
    name: "Nova",
    file: "Nova.ts",
    ext: "TS",
    desc: "Asistente conversacional con IA, con memoria de contexto, análisis de PDFs adjuntos y function calling para gestión de tareas en tiempo real desde el chat. Incluye bot de Telegram con entrada por voz.",
    stack: ["Next.js", "Gemini API", "Supabase"],
    repo: "https://github.com/vannyaVersalovic/",
    demo: "",
    shot: "assets/projects/nova.png"
  },
  {
    name: "Sistema POS",
    file: "pos.php",
    ext: "PHP",
    desc: "Sistema de punto de venta con gestión de ventas, inventario y reportes. Backend en PHP/MySQL con frontend en React.",
    stack: ["PHP", "MySQL", "React"],
    repo: "",
    repoNote: "Código privado",
    demo: "",
    shot: "assets/projects/pos.png"
  },
  {
    name: "Karina PC Tracker",
    file: "karina-tracker.js",
    ext: "JS",
    desc: "Tracker de photocards de K-pop con reconocimiento de imágenes vía Groq Vision API, autenticación multiusuario y un rediseño de interfaz en clave dark/velvet.",
    stack: ["JavaScript", "Groq Vision API"],
    repo: "",
    repoNote: "Aún no está en GitHub",
    demo: "",
    shot: "assets/projects/karina-tracker.png"
  },
  {
    name: "Sitio Inmobiliario",
    file: "sitio-inmobiliario.astro",
    ext: "ASTRO",
    desc: "Panel de administración de propiedades para un corredor inmobiliario, con manejo de imágenes en la nube.",
    stack: ["Astro", "Supabase", "Cloudinary"],
    repo: "https://github.com/vannyaVersalovic/",
    demo: "",
    shot: "assets/projects/sitio-inmobiliario.png"
  },
  {
    name: "Apoya.dev",
    file: "apoya-dev.vue",
    ext: "VUE",
    desc: "Plataforma tipo Ko-fi/Patreon para recibir apoyos simbólicos de una comunidad.",
    stack: ["Laravel 11", "Vue 3", "Inertia.js", "Tailwind"],
    repo: "",
    repoNote: "Aún no está en GitHub",
    demo: "",
    shot: "assets/projects/apoya-dev.png"
  },
  {
    name: "Mis Gastos",
    file: "MisGastos.dart",
    ext: "DART",
    desc: "App móvil de finanzas personales con persistencia local, para registrar y revisar gastos sin depender de conexión.",
    stack: ["Flutter", "Dart", "SQLite"],
    repo: "https://github.com/vannyaVersalovic/",
    demo: "",
    shot: "assets/projects/mis-gastos.png"
  },
  {
    name: "Plantillas Web",
    file: "plantillas-web.html",
    ext: "HTML",
    desc: "Dos plantillas de 4 páginas cada una, para restaurante y barbería, listas para vender a pequeños negocios que necesitan presencia web rápida.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/vannyaVersalovic/",
    demo: "",
    shot: "assets/projects/plantillas-web.png"
  }
];

// =========================================================
// RENDER DE PROYECTOS
// =========================================================
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  if(!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-card__shot">
        <img
          src="${p.shot}"
          alt="Captura de pantalla de ${p.name}"
          loading="lazy"
          onerror="this.closest('.project-card__shot').innerHTML='Agrega tu captura en<br>${p.shot}'"
        >
      </div>
      <div class="project-card__body">
        <div class="project-card__filebar">
          <span>${p.file}</span>
          <span class="project-card__ext">${p.ext}</span>
        </div>
        <h3 class="project-card__title">${p.name}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__stack">
          ${p.stack.map(s => `<span class="pill">${s}</span>`).join("")}
        </div>
        <div class="project-card__links">
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Ver código →</a>` : ""}
          ${!p.repo && p.repoNote ? `<span class="project-card__note">${p.repoNote}</span>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

// =========================================================
// EFECTO DE TIPEO EN EL HERO
// =========================================================
function typeText(el, text, speed = 45){
  if(!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion){ el.textContent = text; return; }

  let i = 0;
  el.textContent = "";
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(timer);
  }, speed);
}

// =========================================================
// MODAL DE CV
// =========================================================
function initCvModal(){
  const trigger = document.getElementById("cvTrigger");
  const modal = document.getElementById("cvModal");
  const backdrop = document.getElementById("cvBackdrop");
  const closeBtn = document.getElementById("cvClose");
  const frame = document.getElementById("cvFrame");
  if(!trigger || !modal) return;

  const open = () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    trigger.focus();
  };

  trigger.addEventListener("click", open);
  backdrop.addEventListener("click", close);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape" && !modal.hidden) close();
  });

  // Si el PDF no existe todavía, muestra el mensaje de reemplazo
  if(frame){
    frame.addEventListener("error", () => modal.classList.add("cv-modal--error"));
  }
}

// =========================================================
// MENÚ MÓVIL
// =========================================================
function initMobileMenu(){
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".topbar__nav");
  if(!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("topbar__nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("topbar__nav--open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// INIT
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  typeText(document.getElementById("typedName"), "Vannya Salinas Versalovic");
  initCvModal();
  initMobileMenu();

  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});