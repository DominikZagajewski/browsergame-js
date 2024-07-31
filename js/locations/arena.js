import { bosses } from "../boss-arena.js";

export function displayArena() {
  const content = document.getElementById("content");
  content.innerHTML =
    "<h1>Arena</h1><p>Wybierz bossa do walki</p><div id='button-boss'></div>";

  const buttonContainer = document.getElementById("button-boss");

  bosses.forEach((boss) => {
    const button = document.createElement("button");
    button.textContent = boss.name;
    button.onclick = () => alert(boss.name);
    buttonContainer.appendChild(button);
  });
}
