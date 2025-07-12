import "./css/style.css";
import { Collapse } from "./js/collapse";
import "./js/app";

const root = document.querySelector(".root");
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque aut beatae delectus distinctio," +
  " dolore ea eligendi excepturi explicabo illo itaque iure labore libero minus nobis pariatur temporibus veritatis voluptatibus?";
const collapse = new Collapse(root);
collapse.create(lorem);
