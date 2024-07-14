function displayProfile(player) {
  const content = document.getElementById("content");
  content.innerHTML = `<h1>${player.name}</h1><p>Twoje staty:</p>
      <p>Poziom: ${player.level}</p>
      <p>Siła: ${player.strenght}</p>
      <p>Zręczność: ${player.agility}</p>
      <p>Wytrzymałość: ${player.endurance}</p>
      <p>Strategia: ${player.strategy}</p>
      <p>Klasa: ${player.class}</p>
      <p>Doświadczenie: ${Math.ceil(player.experience)}/${Math.ceil(
    player.maxExperience
  )}`;
}
