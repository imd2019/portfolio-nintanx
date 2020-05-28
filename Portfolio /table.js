export default class Table {
  constructor(x, y, width, height, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.name = name;
  }

  display() {
    fill(188, 143, 143);
    stroke("black");
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.height);
    fill(0, 0, 0);
    noStroke();
    textSize(20);
    text(this.name, this.x + 10, this.y + 3, 50, 20);
  }
}
