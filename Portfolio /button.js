export default class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height);
  }

  hitTest(x, y) {
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    )
      return true;
    {
      return false;
    }
  }

  clicked() {
    console.log("HI");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}

let button1 = new Button(100, 100, 80, 40);

function draw() {
  button1.display();
}
window.draw = draw;

function mouseClicked() {
  button1.mouseClicked();
}
window.mouseClicked = mouseClicked;
