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

    btn.addEventListener("click", () => {
      const isActive = data.classList.contains("active");

      if (isActive) {
        data.classList.add("inactive");
        data.classList.remove("active");

        data.addEventListener(
          "animationend",
          () => {
            data.classList.remove("inactive");
          },
          { once: true },
        );
      } else {
        // Просто раскрываем
        data.classList.add("active");
      }
    });

    const data = document.createElement("div");
    data.classList.add("collapse-text");
    data.textContent = text;

    collapse.append(btn, data);
    this.root.append(collapse);
  }
}
