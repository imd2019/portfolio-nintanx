import Button from "./button.js";

export default class Dice extends Button {
  constructor(x, y) {
    super(x, y, 60, 60);
    this.value = this.getRandomValue();
    this.enabled = true;
  }
  getRandomValue() {
    return ceil(random(0, 6));
  }

  roll() {
    if (this.enabled) {
      this.value = this.getRandomValue();

      return this.value;
    }
  }

  display() {
    push();
    if (this.enabled) {
      fill(188, 143, 143);
    } else {
      fill(150, 150, 150);
    }
    //rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, this.width / 10);
    fill("black");

    //text(this.value, this.x + this.width / 2, this.y + this.height / 2);
    //Eins
    if (this.value === 1) {
      ellipse(this.x + 30, this.y + 30, this.width / 5, this.height / 5);
    }
    //Zwei
    if (this.value === 2) {
      ellipse(this.x + 40, this.y + 40, this.width / 5, this.height / 5);
      ellipse(this.x + 20, this.y + 20, this.width / 5, this.height / 5);
    }

    //Drei
    if (this.value === 3) {
      ellipse(this.x + 15, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 45, this.y + 45, this.width / 5, this.height / 5);
      ellipse(this.x + 30, this.y + 30, this.width / 5, this.height / 5);
    }
    //Vier
    if (this.value === 4) {
      ellipse(this.x + 44, this.y + 44, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 44, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 44, this.width / 5, this.height / 5);
    }
    //Fünf

    if (this.value === 5) {
      ellipse(this.x + 44, this.y + 44, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 30, this.y + 30, this.width / 5, this.height / 5);
      ellipse(this.x + 44, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 44, this.width / 5, this.height / 5);
    }
    //Sechs
    if (this.value === 6) {
      ellipse(this.x + 44, this.y + 44, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 44, this.y + 15, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 44, this.width / 5, this.height / 5);
      ellipse(this.x + 15, this.y + 30, this.width / 5, this.height / 5);
      ellipse(this.x + 44, this.y + 30, this.width / 5, this.height / 5);
    }

    pop();
  }

  clicked() {
    if (this.enabled === true) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }
}
