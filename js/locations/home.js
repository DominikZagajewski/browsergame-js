//możliwość ulepszania domu za złoto co sprawi zwiększenie max stamina
// ulepszenie odpoczynku: wybierz ile czasu chcesz odpocząć, czym dłużej tym więcej uzyskasz staminy

function displayHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1>Dom</h1>
    <p>możliwość odpoczynku</p>
    <button id="restore-stamina-button">Odnów wytrzymałość</button>
  `;

  const restoreStaminaButton = document.getElementById(
    "restore-stamina-button"
  );
  if (restoreStaminaButton) {
    restoreStaminaButton.addEventListener("click", restoreStamina);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayHome();
  updatePlayerStats();
});

function updatePlayerStats() {
  const staminaElement = document.getElementById("stamina");
  if (staminaElement) {
    staminaElement.textContent = `Wytrzymałość: ${player.stamina}`;
  }
}

function restoreStamina() {
  const maxStamina = 100;
  player.stamina = maxStamina;
  updatePlayerStats();
  alert("Wytrzymałość została odnowiona");
}
