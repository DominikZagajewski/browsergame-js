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
    class: "",
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
    playerLevel.textContent = `Poziom: ${player.level}`;
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
        content.innerHTML = "<h1>Sklep</h1><p>Lokalizacja w budowie</p>";
        break;
      case "tavern":
        content.innerHTML = "<h1>Tawerna</h1><p>Lokalizacja w budowie</p>";
        break;
      case "home":
        content.innerHTML = "<h1>Dom</h1><p>Lokalizacja w budowie</p>";
        break;
      case "temple":
        content.innerHTML = "<h1>Świątynia</h1><p>Lokalizacja w budowie</p>";
        break;
      case "forest":
        displayForestTasks();
        break;
      case "profile":
        content.innerHTML = `<h1>${player.name}</h1><p>Twoje staty:</p>
        <p>Poziom: ${player.level}</p>
        <p>Siła: ${player.strenght}</p>
        <p>Zręczność: ${player.agility}</p>
        <p>Wytrzymałość: ${player.endurance}</p>
        <p>Strategia: ${player.strategy}</p>
        <p>Klasa: ${player.class}</p>`;
        break;
      default:
        content.innerHTML =
          "<h1>Witaj w Legionie!</h1><p>Wybierz lokalizację, do której chcesz się udać.</p>";
    }
  }

  function displayForestTasks() {
    const content = document.getElementById("content");
    content.innerHTML =
      "<h1>Las</h1><p>Wybierz zadanie:</p><div id='forest-tasks'></div>";

    const forestTasks = document.getElementById("forest-tasks");
    const shuffledTasks = tasks.sort(() => 0.5 - Math.random());
    const selectedTasks = shuffledTasks.slice(0, 3);

    selectedTasks.forEach((task) => {
      const taskButton = document.createElement("button");
      taskButton.classList.add("task-button");
      taskButton.textContent = task.name;
      taskButton.addEventListener("click", () => {
        displayTaskDetails(task);
      });
      forestTasks.appendChild(taskButton);
    });
  }

  function displayTaskDetails(task) {
    const content = document.getElementById("content");
    content.innerHTML = `
      <h1>${task.name}</h1>
      <p>${task.description}</p>
      <p>Czas wykonania: ${task.duration / 1000} sekund</p>
      <button id="start-task-button">Rozpocznij to zadanie</button>
    `;

    const startTaskButton = document.getElementById("start-task-button");
    if (startTaskButton) {
      startTaskButton.addEventListener("click", () => {
        startTask(task);
      });
    }
  }

  function startTask(task) {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Wykonywanie zadania: ${task.name}</h1>
        <div id="task-timer">${task.duration / 1000} sekund</div>
        <div id="task-progress-bar">
          <div id="task-progress"></div>
        </div>
      `;

    const taskTimer = document.getElementById("task-timer");
    const taskProgress = document.getElementById("task-progress");
    let timeLeft = task.duration / 1000;
    const interval = setInterval(() => {
      timeLeft--;
      taskTimer.textContent = `${Math.ceil(timeLeft)} sekund`;
      taskProgress.style.width = `${
        ((task.duration / 1000 - timeLeft) / (task.duration / 1000)) * 100
      }%`;
      if (timeLeft <= 0) {
        clearInterval(interval);
        content.innerHTML = "<h1>Zadanie ukończone!</h1>";
      }
    }, 1000);
  }
});

//pełne
