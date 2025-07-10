export class Collapse {
  constructor(root) {
    this.root = root;
  }
  create(text) {
    const collapse = document.createElement("div");
    collapse.classList.add("collapse");

    const btn = document.createElement("div");
    btn.classList.add("btn");
    btn.textContent = "Collapse";

    const data = document.createElement("div");
    data.classList.add("collapse-text");
    data.textContent = text;

    collapse.append(btn, data);
    this.root.append(collapse);
  }
}
