"use strict";

window.addEventListener("load", init);
function init() {
  loop();
}
function loop() {
  modifyModel();
  displayBars();

  setTimeout(loop, 1000);
}

function modifyModel() {
  let model = [];
  if (model.length < 40) {
    for (let i = 1; i <= 39; i++) {
      const customer = randomNumber();
      model[i] = customer;
    }
  } else if (model.length == 40) {
    const customer = randomNumber();
    model.push(customer);
    model.shift();
  }
}

function displayBars() {
  for (let i = 1; i <= 39; i++) {
    const height = randomNumber();
    const bar = document.querySelector(`#bar${i}`);
    bar.style.height = `${height}px`;
  }
}
function randomNumber() {
  return Math.floor(Math.random() * 32);
}
