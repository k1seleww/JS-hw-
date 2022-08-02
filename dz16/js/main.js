import { DOM } from "./DOM.js";

class Circle extends DOM {
  constructor(width, height, color) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }
  spawnCircle() {
    this.div = document.createElement("div");
    this.dom.append(this.div);
    this.div.style.width = `${this.width}px`;
    this.div.style.height = `${this.height}px`;
    this.div.style.backgroundColor = this.color;
    this.div.style.borderRadius = "100%";
  }
  marginCircleleft() {
    this.div.addEventListener("click", () => {
      this.div.style.marginLeft = "100px";
      console.log(this.div.addEventListener, "Переместили");
    });
  }
}

class Fabric extends Circle {
  createCircle() {
    this.spawnCircle();
    this.marginCircleleft();
  }
}

const firebrickCircle = new Fabric(100, 100, "firebrick");
firebrickCircle.createCircle();
