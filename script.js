document.addEventListener("DOMContentLoaded", () => {
  const player = {
    name: "",
    health: 100,
    stamina: 100,
    gold: 0,
    level: 1,
    strenght: 10,
    agility: 10,
    endurance: 10,
    strategy: 10,
    class: "", // klasa postaci (bez żadnych zmian dla rozgrywki póki co)
  };

  const playerName = document.getElementById("player-name");
  const playerHealth = document.getElementById("player-health");
  const playerStamina = document.getElementById("player-stamina");
  const playerGold = document.getElementById("player-gold");
  const playerLevel = document.getElementById("player-level");
  const playerStrenght = document.getElementById("player-strenght");
  const playerAgility = document.getElementById("player-agility");
  const playerEndurance = document.getElementById("player-endurance");
  const playerStrategy = document.getElementById("player-strategy");

  function updatePlayerStats() {
    playerName.textContent = player.name;
    playerHealth.textContent = `HP: ${player.health}`;
    playerStamina.textContent = `Wytrzymałość: ${player.stamina}`;
    playerGold.textContent = `Złoto: ${player.gold}`;
    playerLevel.textContent = `Level: ${player.level}`;
    playerStrenght.textContent = `Siła: ${player.strenght}`;
    playerAgility.textContent = `Zręczność: ${player.agility}`;
    playerEndurance.textContent = `Wytrzymałość: ${player.endurance}`;
    playerStrategy.textContent = `Strategia: ${player.strategy}`;
  }

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
      classButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      player.class = button.getAttribute("data-class");
      document.getElementById("start-game-button").style.display = "block";
    });
  });

  document.getElementById("start-game-button").addEventListener("click", () => {
    if (player.class) {
      updatePlayerStats();
      document.getElementById("class-selection-screen").style.display = "none";
      document.querySelector("header").style.display = "flex";
      document.querySelector(".nav-container").style.display = "flex";
    } else {
      alert("Wybierz klasę!");
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
        content.innerHTML = "<h1>Sklep</h1><p>Lokacja w budowie</p>";
        break;
      case "tavern":
        content.innerHTML = "<h1>Tawerna</h1><p>Lokacja w budowie</p>";
        break;
      case "home":
        content.innerHTML = "<h1>Dom</h1><p>Lokacja w budowie</p>";
        break;
      case "temple":
        content.innerHTML = "<h1>Świątynia</h1><p>Lokacja w budowie</p>";
        break;
      case "forest":
        displayForestTasks();
        break;
      case "profile":
        content.innerHTML = `<h1>Postać</h1>
        
        <p>Nick: ${player.name}</p><p>Twoje staty:</p> <p>Poziom: ${player.level}</p>
        <p>Siła: ${player.strenght}</p> <p>Zręczność: ${player.agility}</p>
        <p>Wytrzymałość: ${player.endurance}</p> <p>Strategia: ${player.strategy}</p> <p>Klasa: ${player.class}</p>`;
        break;
      default:
        content.innerHTML =
          "<h1>Witaj w Legionie!</h1><p>Wybierz lokalizację, do której chcesz się udać.</p>";
    }
  }

  function displayForestTasks() {
    const content = document.getElementById("content");
    content.innerHTML =
      "<h1>Las</h1><p>Wybierz zadanie: <div id='forest-tasks'></div></p>";

    const forestTasks = document.getElementById("forest-tasks");
    const shuffledTasks = tasks.sort(() => 0.5 - Math.random());
    const selectedTasks = shuffledTasks.slice(0, 3);

    selectedTasks.forEach((task) => {
      const taskButton = document.createElement("button");
      taskButton.className = "task-option";
      taskButton.textContent = task;
      taskButton.addEventListener("click", () => {
        alert(`Wybrałeś zadanie: ${task}`);
      });
      forestTasks.appendChild(taskButton);
    });
  }
});
