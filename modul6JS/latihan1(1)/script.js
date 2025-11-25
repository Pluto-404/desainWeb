function calculate() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").textContent = "Input tidak valid!";
    return;
  }

  let hasil = 0;

  switch (op) {
    case "+":
      hasil = a + b;
      break;
    case "-":
      hasil = a - b;
      break;
    case "*":
      hasil = a * b;
      break;
    case "/":
      if (b === 0) hasil = "Tidak bisa bagi 0!";
      else hasil = a / b;
      break;
  }

  document.getElementById("result").textContent = hasil;
}


particlesJS("particles-js", {
  "particles": {
    "number": { "value": 120 },
    "color": { "value": "#00ff00" },
    "shape": { "type": "circle" },
    "size": { "value": 3 },
    "move": { "speed": 1 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "grab" }},
    "modes": { "grab": { "distance": 120 }}
  }
});
