//wyszarzenie plusów jak nie ma punktów umiejętności,
//najechanie myszką na plus pokaże koszt awansu (będzie to ze złotem plus)

function displayProfile(player) {
  const content = document.getElementById("content");
  content.innerHTML = `<img src="assets/player-icon.png" alt="Ikona gracza" id="player-icon" />
  <h1>${player.name}</h1>
  <p>Klasa: ${player.class}</p>
  <p>Twoje staty:</p>
      <p>Poziom: ${player.level}</p>
      <p>Siła: ${player.strength} <button id="increase-strength" ${
    player.experiencePoints === 0 ? "disabled" : ""
  }>+</button></p>
      <p>Zręczność: ${
        player.agility
      }<button id="increase-agility">+</button></p>
      <p>Wytrzymałość: ${
        player.endurance
      }<button id="increase-endurance">+</button></p>
      <p>Strategia: ${
        player.strategy
      }<button id="increase-strategy">+</button></p>
  <p>Punkty umiejętności: ${player.experiencePoints}</p>`;

  //  <p>Doświadczenie: ${Math.ceil(player.experience)}/${Math.ceil(player.maxExperience)} narazie niepotrzebne, pokazanie doświadczenia

  // Zwiększanie statystkyk

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

// moje
