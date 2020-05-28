import Dice from "./dice.js";

import RollAllButton from "./rollAllButton.js";

import Table from "./table.js";

import TableCount from "./tablecount.js";

var test = [];
let eyes = []; // globale Variable

let total = [];

function calculateEyes() {
  eyes = [0, 0, 0, 0, 0, 0]; // lokale Variable-> nur in der Funktion
  if (allButton.enabled == true) {
    for (let index in test) {
      let value = test[index].value;
      console.log(value);
      eyes[value - 1] += value;
    }
    console.log(eyes);
  }
}

function reset() {
  allButton.enabled = true;
  allButton.try = 0;
  dice1.enabled = true;
  dice2.enabled = true;
  dice3.enabled = true;
  dice4.enabled = true;
  dice5.enabled = true;

  let sum = 0;
  for (let i = 0; i < tablefeld2.length - 1; i++) {
    let val = tablefeld2[i].eyesNumber;
    let number = 0;
    if (val !== "") {
      number = parseInt(val, 10);
    }
    sum += number;
  }

  tablefeld2[tablefeld2.length - 1].eyesNumber = sum;
}

let tablefeld = [];
for (let i = 0; i < 7; i++) {
  let names = ["1er", "2er", "3er", "4er", "5er", "6er", "total"];
  let n = new Table(windowWidth / 2 - 200, 300 + i * 30, 70, 30, names[i]);

  tablefeld.push(n);
}

let tablefeld2 = [];
for (let i = 0; i < 7; i++) {
  let reihe = ["1er", "2er", "3er", "4er", "5er", "6er", "total"];
  let f = new TableCount(
    windowWidth / 2 - 130,
    300 + i * 30,
    70,
    30,
    reihe[i],
    eyes,
    reset
  );
  tablefeld2.push(f);
}

//var addieren=[];

let dice1 = new Dice(windowWidth / 2, 330);
let dice2 = new Dice(windowWidth / 2, 480);
let dice3 = new Dice(windowWidth / 2 + 150, 330);
let dice4 = new Dice(windowWidth / 2 + 75, 405);
let dice5 = new Dice(windowWidth / 2 + 150, 480);

test.push(dice1);
test.push(dice2);
test.push(dice3);
test.push(dice4);
test.push(dice5);

let allButton = new RollAllButton(windowWidth / 2, 240, 200, 40, "HI", test);

//let table = new Table(10, 230, 180, 240);

function draw() {
  clear();
  noStroke();

  background(102, 205, 170);

  // Überschrift
  fill(0, 0, 0);
  textSize(100);
  textFont("heather");
  text("Kniffel", windowWidth / 2, 150);
  textSize(20);
  text("von Nina", windowWidth / 2, 170);

  allButton.display();

  for (let index in tablefeld) {
    tablefeld[index].display();
  }

  for (let index in tablefeld2) {
    tablefeld2[index].display();
  }
}
window.draw = draw;

function mouseClicked() {
  for (let i = 0; i < test.length; i++) {
    test[i].mouseClicked();
  }
  for (let index in tablefeld2) {
    tablefeld2[index].eyes = eyes; // nimmt eyes array und erlaubt jeder Kachel darauf zuzugreifen
    tablefeld2[index].mouseClicked();
  }
  allButton.mouseClicked();
  if (allButton.hitTest(mouseX, mouseY) && allButton.enabled == true) {
    calculateEyes();
  }
}

window.mouseClicked = mouseClicked;
