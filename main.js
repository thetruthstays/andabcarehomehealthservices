/* ============================================
   ANDAB CARE — Main JavaScript
   js/main.js
   ============================================ */

/* ── Testimonials Data ── */
const testimonials = [
  {
    text: "Andab Care are very smart and reliable. I recommend them to anyone who needs their help.",
    author: "Comfort Attoh",
  },
  {
    text: "A friend recommended Andab care when I needed help with my father's care. They are professionals and always available to listen.",
    author: "Miriam Adjei",
  },
  {
    text: "Andab care is a wonderful company. Management is great, the staff is great. Any concern I had was answered in a timely manner.",
    author: "Quamai Woahtee",
  },
  {
    text: "They are helpful, caring, and listen to their client and family members' concerns. They are a trusting company.",
    author: "The Life of Rugie Bangs",
  },
  {
    text: "Andab is very professional. I had so many questions and the owner took her time to explain everything to me.",
    author: "Fatmatta Sillah",
  },
];

const tIdx = { about: 0 };

/* ── Render Testimonial Carousel ── */
function renderTestimonial(id) {
  const textEl = document.getElementById("t-text-" + id);
  const authorEl = document.getElementById("t-author-" + id);
  const dotsEl = document.getElementById("t-dots-" + id);
  if (!textEl) return;

  const i = tIdx[id];
  const t = testimonials[i];

  textEl.textContent = "\u201C" + t.text + "\u201D";
  authorEl.textContent = "\u2014 " + t.author;

  dotsEl.innerHTML = "";
  testimonials.forEach(function (_, j) {
    const dot = document.createElement("button");
    dot.className = "t-dot" + (j === i ? " active" : "");
    dot.setAttribute("aria-label", "Go to testimonial " + (j + 1));
    dot.onclick = function () {
      tIdx[id] = j;
      renderTestimonial(id);
    };
    dotsEl.appendChild(dot);
  });
}

function nextT(id) {
  tIdx[id] = (tIdx[id] + 1) % testimonials.length;
  renderTestimonial(id);
}

function prevT(id) {
  tIdx[id] = (tIdx[id] - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(id);
}

/* ── Page Navigation ── */
function showPage(name) {
  /* Hide all pages */
  document.querySelectorAll(".page").forEach(function (p) {
    p.classList.remove("active");
    p.innerHTML = "";
  });

  /* Show selected page */
  const pageEl = document.getElementById("page-" + name);
  if (pageEl && PAGES[name]) {
    fetch(PAGES[name])
      .then((response) => response.text())
      .then((html) => {
        pageEl.innerHTML = html;
        pageEl.classList.add("active");

        /* Update nav active state */
        document.querySelectorAll(".nav-link").forEach(function (l) {
          l.classList.remove("active");
        });
        const navEl = document.getElementById("nav-" + name);
        if (navEl) navEl.classList.add("active");

        /* Scroll to top */
        window.scrollTo(0, 0);

        /* Init testimonials if on about page */
        if (name === "about") {
          setTimeout(function () {
            renderTestimonial("about");
          }, 0);
        }
      });
  }
}

/* ── Scroll to Service ── */
function scrollToService(id) {
  console.log("Scrolling to service:", id);
  const element = document.getElementById(id);
  if (element) {
    console.log("Element found:", element);
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Element not found for id:", id);
  }
}

/* ── Contact Form ── */
function submitForm() {
  const name = document.getElementById("f-name");
  const email = document.getElementById("f-email");
  if (!name || !email) return;
  if (!name.value.trim() || !email.value.trim()) {
    alert("Please enter your name and email address.");
    return;
  }
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("success-box").classList.add("show");
}

function resetForm() {
  ["f-name", "f-email", "f-phone", "f-message"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const form = document.getElementById("contact-form");
  const success = document.getElementById("success-box");
  if (form) form.style.display = "block";
  if (success) success.classList.remove("show");
}

/* ── Init: Load Home Page on Start ── */
document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});
