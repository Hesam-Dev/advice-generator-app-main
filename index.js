"use strict";
const diceBtn = document.querySelector(".dice__container");
const advice = document.querySelector(".advice__text");
const adviceId = document.querySelector(".advice__id");

const adviceGenerate = async function () {
  const api = await fetch("https://api.adviceslip.com/advice");
  const data = await api.json();
  advice.textContent = `"${data.slip.advice}"`;
  adviceId.textContent = `#${data.slip.id}`;
};
diceBtn.addEventListener("click", adviceGenerate);
