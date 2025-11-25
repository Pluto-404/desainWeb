/* -------------------------
   Kalkulator logic
   ------------------------- */
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === 'clear') {
      clearDisplay();
      return;
    }
    if (action === 'del') {
      deleteLast();
      return;
    }
    if (action === 'eval') {
      calculate();
      return;
    }

    // append numeric/operator
    if (typeof val !== 'undefined') {
      append(val);
    }
  });
});

function append(v) {
  // simple validation: prevent multiple leading zeros or repeated dots
  const cur = display.value;
  if (v === '.' && cur.slice(-1) === '.') return;
  display.value = cur + v;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const expr = display.value;
  try {
    // sedikit sanitasi: hanya izinkan angka, operator dasar, titik dan spasi
    if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
      display.value = 'Error';
      return;
    }
    // gunakan Function daripada eval agar sedikit lebih aman
    const result = Function(`"use strict"; return (${expr})`)();
    display.value = String(result);
  } catch (e) {
    display.value = 'Error';
  }
}

/* keyboard support (opsional) */
window.addEventListener('keydown', (e) => {
  const allowed = '0123456789+-*/().';
  if (allowed.includes(e.key)) {
    append(e.key);
    e.preventDefault();
  } else if (e.key === 'Enter') {
    calculate();
    e.preventDefault();
  } else if (e.key === 'Backspace') {
    deleteLast();
    e.preventDefault();
  } else if (e.key === 'Escape') {
    clearDisplay();
    e.preventDefault();
  }
});

/* -------------------------
   Inisialisasi particles.js
   (library dipanggil via CDN di index.html)
   ------------------------- */
function initParticles() {
  if (typeof particlesJS === 'undefined') {
    console.warn('particlesJS belum tersedia — pastikan CDN ter-load');
    return;
  }

  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 120, "density": { "enable": true, "value_area": 900 } },
      "color": { "value": "#00ff66" },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.9,
        "random": true,
        "anim": { "enable": false }
      },
      "size": {
        "value": 8.5,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": true,
        "distance": 110,
        "color": "#00ff66",
        "opacity": 0.08,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.2 } },
        "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8 },
        "repulse": { "distance": 120 },
        "push": { "particles_nb": 4 },
        "remove": { "particles_nb": 2 }
      }
    },
    "retina_detect": true
  });
}

/* jalankan inisialisasi setelah DOM ready.
   library particles sudah dimuat dari CDN karena <script> di HTML sebelum file ini */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParticles);
} else {
  initParticles();
}
