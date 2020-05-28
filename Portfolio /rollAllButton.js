import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);
    this.title = title;
    this.dice = dice;
    this.try = 0;
    this.enabled = true;
  }

  display() {
    if (this.try === 1) {
      this.title = "Again";
    } else if (this.try === 2) {
      this.title = "Last Chance";
    } else if (this.try === 0) {
      this.title = "Start";
    }

    //rectMode(CENTER);
    stroke("black");
    strokeWeight(2);
    fill(188, 143, 143);
    rect(this.x, this.y, this.width, this.height, this.width / 10);
    fill(0, 0, 0);
    noStroke();
    textSize(16);
    push();
    textAlign(CENTER);
    text(this.title, this.x, this.y + this.height / 1.5, this.width);
    stroke("black");
    strokeWeight(1);
    for (var i = 0; i < this.dice.length; i++) {
      this.dice[i].display();
    }
    pop();
  }

  // reset() {
  //   for (let i in this.dice) {
  //     this.dice[i].active = true;
  //   }
  //   this.clicked();
  // }
  clicked() {
    if (this.enabled == true && this.try !== 3) {
      //Nach 3*Würfeln stoppt es
      this.try = this.try + 1;
      for (var i = 0; i < this.dice.length; i++) {
        this.dice[i].roll();
      }
    } else if (this.try >= 3) {
      this.enabled = false;
    }
  }
}
