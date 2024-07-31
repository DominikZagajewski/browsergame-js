function displayProfile(player) {
  const content = document.getElementById("content");
  content.innerHTML = `
    <img src="assets/player-icon.png" alt="Ikona gracza" id="player-icon" />
    <h1>${player.name}</h1>
    <p>Klasa: ${player.class}</p>
    <p>Twoje staty:</p>
    <p>Poziom: ${player.level}</p>
    <p>Siła: ${player.strength} <button id="increase-strength" ${
    player.experiencePoints === 0 ? "disabled" : ""
  }>+</button></p>
    <p>Zręczność: ${player.agility}<button id="increase-agility" ${
    player.experiencePoints === 0 ? "disabled" : ""
  }>+</button></p>
    <p>Wytrzymałość: ${player.endurance}<button id="increase-endurance" ${
    player.experiencePoints === 0 ? "disabled" : ""
  }>+</button></p>
    <p>Strategia: ${player.strategy}<button id="increase-strategy" ${
    player.experiencePoints === 0 ? "disabled" : ""
  }>+</button></p>
    <p>Punkty umiejętności: ${player.experiencePoints}</p>
    <div id="inventory" class="inventory-container"></div>
  `;

  const inventoryContainer = document.getElementById("inventory");
  for (let i = 0; i < 30; i++) {
    const card = document.createElement("div");
    card.className = "inventory-card";
    inventoryContainer.appendChild(card);
  }

  document.getElementById("increase-strength").addEventListener("click", () => {
    if (player.experiencePoints > 0) {
      player.strength++;
      player.experiencePoints--;
      updatePlayerStats();
      displayProfile(player);
    }
  });

  document.getElementById("increase-agility").addEventListener("click", () => {
    if (player.experiencePoints > 0) {
      player.agility++;
      player.experiencePoints--;
      updatePlayerStats();
      displayProfile(player);
    }
  });

  document
    .getElementById("increase-endurance")
    .addEventListener("click", () => {
      if (player.experiencePoints > 0) {
        player.endurance++;
        player.experiencePoints--;
        updatePlayerStats();
        displayProfile(player);
      }
    });

  document.getElementById("increase-strategy").addEventListener("click", () => {
    if (player.experiencePoints > 0) {
      player.strategy++;
      player.experiencePoints--;
      updatePlayerStats();
      displayProfile(player);
    }
  });
}

displayProfile(player);

updatePlayerStats();
