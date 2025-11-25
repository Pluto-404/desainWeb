const btn = document.getElementById('toggleBtn');
const marks = document.querySelectorAll('.mark');

let active = false;

btn.addEventListener('click', () => {
  active = !active;

  marks.forEach(span => {
    if (active) span.classList.add('highlight');
    else span.classList.remove('highlight');
  });

  btn.textContent = active ? "Hilangkan Highlight" : "Highlight Paragraf";
});
