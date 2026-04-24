let current = "";
let history = "";

function append(value) {
  current += value;
  updateDisplay();
}

function clearAll() {
  current = "";
  history = "";
  updateDisplay();
}

function deleteLast() {
  current = current.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    history = current;
    current = eval(current).toString();
  } catch {
    current = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").innerText = current || "0";
  document.getElementById("history").innerText = history;
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearAll();
  }
});
