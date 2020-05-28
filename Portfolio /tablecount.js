import RollAllButton from "./rollAllButton.js";

export default class TableCount extends RollAllButton {
  constructor(x, y, width, height, reihe, eyes, reset) {
    super(x, y, width, height);
    this.reihe = reihe;
    this.eyes = eyes;
    this.eyesNumber = "";
    this.reset = reset;
  }

  display() {
    fill(188, 143, 143);
    stroke("black");
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.height);
    fill(0, 0, 0);
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text(
      this.eyesNumber,
      this.x,
      this.y + this.height / 3,
      this.width,
      this.height
    );
  }

  clicked() {
    if (this.reihe == "1er") {
      this.eyesNumber = this.eyes[0];
    }
    if (this.reihe == "2er") {
      this.eyesNumber = this.eyes[1];
    }
    if (this.reihe == "3er") {
      this.eyesNumber = this.eyes[2];
    }
    if (this.reihe == "4er") {
      this.eyesNumber = this.eyes[3];
    }
    if (this.reihe == "5er") {
      this.eyesNumber = this.eyes[4];
    }
    if (this.reihe == "6er") {
      this.eyesNumber = this.eyes[5];
    }
    this.reset();
    console.log(this.eyes);
    console.log(this.eyesNumber);
  }
}
