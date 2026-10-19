// ===== Menu mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "✕" : "☰";
});

// Tutup menu setelah klik link (mobile)
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "☰";
  })
);

// ===== Animasi reveal saat scroll =====
const revealTargets = document.querySelectorAll(
  ".section, .hero, .skill-box, .project-card"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("visible"));
}

// ===== Highlight nav aktif berdasarkan section yang terlihat =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY + 120;
    let current = "";
    sections.forEach((s) => {
      if (s.offsetTop <= y) current = s.id;
    });
    navAnchors.forEach((a) => {
      const match = a.getAttribute("href") === "#" + current;
      a.style.color = match ? "var(--text)" : "";
    });
  },
  { passive: true }
);
