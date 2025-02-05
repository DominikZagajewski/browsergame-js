import { displayArena } from "./locations/arena.js";

document.addEventListener("DOMContentLoaded", () => {
  window.player = {
    name: "",
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    gold: 0,
    level: 1,
    strength: 10,
    agility: 10,
    endurance: 10,
    strategy: 10,
    class: "",
    experience: 0,
    maxExperience: 100,
    experiencePoints: 0,
  };

  const playerName = document.getElementById("player-name");
  const playerHealth = document.getElementById("player-health");
  const playerStamina = document.getElementById("player-stamina");
  const playerGold = document.getElementById("player-gold");
  const playerLevel = document.getElementById("player-level");
  const playerStrength = document.getElementById("player-strength");
  const playerAgility = document.getElementById("player-agility");
  const playerEndurance = document.getElementById("player-endurance");
  const playerStrategy = document.getElementById("player-strategy");
  const playerExperience = document.getElementById("player-experience");
  const playerExperiencePoints = document.getElementById(
    "player-experience-points"
  );

  window.updatePlayerStats = function () {
    playerName.textContent = player.name;
    playerHealth.textContent = `HP: ${player.health}/${player.maxHealth}`;
    playerStamina.textContent = `Wytrzymałość: ${player.stamina}/${player.maxStamina}`;
    playerGold.textContent = `Złoto: ${player.gold}`;
    playerLevel.textContent = `Poziom: ${player.level}`;
    playerStrength.textContent = `Siła: ${player.strength}`;
    playerAgility.textContent = `Zręczność: ${player.agility}`;
    playerEndurance.textContent = `Wytrzymałość: ${player.endurance}`;
    playerStrategy.textContent = `Strategia: ${player.strategy}`;
    playerExperience.textContent = `Doświadczenie: ${Math.ceil(
      player.experience
    )}/${Math.ceil(player.maxExperience)}`;
  };

  window.increaseStat = function (stat, amount) {
    player[stat] += amount;
    if (stat === "experience" && player.experience >= player.maxExperience) {
      player.experience = player.experience - player.maxExperience;
      player.level++;
      player.experiencePoints += 10;
      player.maxExperience /= 3 / 5;
    }
    updatePlayerStats();
  };

  window.decreaseStat = function (stat, amount) {
    if (player[stat] - amount >= 0) {
      player[stat] -= amount;
    } else {
      player[stat] = 0;
    }
    updatePlayerStats();
  };

  document
    .getElementById("proceed-to-class-button")
    .addEventListener("click", () => {
      const playerNameInput =
        document.getElementById("player-name-input").value;
      if (playerNameInput) {
        player.name = playerNameInput;
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("class-selection-screen").style.display =
          "block";
      } else {
        alert("Proszę podać imię postaci!");
      }
    });

  const classButtons = document.querySelectorAll(".class-option");
  classButtons.forEach((button) => {
    button.addEventListener("click", () => {
      classButtons.forEach((btn) => btn.classList.remove("selected-class"));
      button.classList.add("selected-class");
      document.getElementById("start-game-button").style.display = "block";
    });
  });

  document.getElementById("start-game-button").addEventListener("click", () => {
    if (document.querySelector(".class-option.selected-class")) {
      player.class = document
        .querySelector(".class-option.selected-class")
        .getAttribute("data-class");
      updatePlayerStats();
      document.getElementById("class-selection-screen").style.display = "none";
      document.querySelector("header").style.display = "flex";
      document.querySelector(".nav-container").style.display = "flex";
    } else {
      alert("Proszę wybrać klasę przed rozpoczęciem gry!");
    }
  });

  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const location = e.target.getAttribute("data-location");
      navigateTo(location);
    });
  });

  function navigateTo(location) {
    const content = document.getElementById("content");
    switch (location) {
      case "shop":
        displayShop();
        break;
      case "tavern":
        displayTavern();
        break;
      case "home":
        displayHome();
        break;
      case "temple":
        displayTemple();
        break;
      case "forest":
        displayForestTasks();
        break;
      case "profile":
        displayProfile(player);
        break;
      case "arena":
        displayArena();
        break;
      default:
        content.innerHTML =
          "<h1>Witaj w Legionie!</h1><p>Wybierz lokalizację, do której chcesz się udać.</p>";
    }
  }
});
