const principalBox = document.querySelector("#principal");
const interestSlider = document.querySelector("#interest");
const compoundBox = document.querySelector("#compound");
const timeBox = document.querySelector("#time");
const totalOutput = document.querySelector("#total");
const earnedOutput = document.querySelector("#earned");
const interestText = document.querySelector("#interestText");

principalBox.addEventListener("input", updateTotal);
compoundBox.addEventListener("input", updateTotal);
timeBox.addEventListener("input", updateTotal);

interestSlider.addEventListener("input", () => {
  interestText.textContent = interestSlider.value;
});

function calculate() {}

function updateTotal() {
  const p = Number(principalBox.value);
  const r = Number(interestSlider.value / 100);
  const n = Number(compoundBox.value);
  const t = Number(timeBox.value);
  const total = p * (1 + r / n) ** (n * t);
  const earned = total - p;
  totalOutput.textContent = total.toFixed(2);
  earnedOutput.textContent = earned.toFixed(2);
}
