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
    <p>${task.experience} doświadczenia</p>
    <p>Czas wykonania: ${task.duration / 1000} sekund</p>
    <button id="start-task-button">Rozpocznij to zadanie</button>
    <button id="complete-task-button" style="display: none;">Zakończ zadanie</button>
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
    <button id="complete-task-button" style="display: none;">Zakończ zadanie</button>
  `;

  const taskTimer = document.getElementById("task-timer");
  const taskProgress = document.getElementById("task-progress");
  const completeTaskButton = document.getElementById("complete-task-button");
  let timeLeft = task.duration / 1000;

  completeTaskButton.style.display = "none"; // Ukryj przycisk na początku

  const interval = setInterval(() => {
    timeLeft--;
    taskTimer.textContent = `${Math.ceil(timeLeft)} sekund`;
    taskProgress.style.width = `${
      ((task.duration / 1000 - timeLeft) / (task.duration / 1000)) * 100
    }%`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      // content.innerHTML = "<h1>Zadanie ukończone!</h1>";
      completeTask(task);
      completeTaskButton.style.display = "block";
    }
  }, 1000);

  completeTaskButton.addEventListener("click", () => {
    clearInterval(interval);
    completeTask(task);
    // content.innerHTML = "<h1>Zadanie ukończone!</h1>";
  });
}

// function completeTask(task) {
//   increaseStat("experience", task.experience);
//   updatePlayerStats();
//   alert(
//     `Zadanie ${task.name} zakończone! Zdobyto ${task.experience} doświadczenia.`
//   );
// }

function completeTask(task) {
  increaseStat("experience", task.experience);
  updatePlayerStats();
  content.innerHTML = `<h1>Zadanie ukończone!</h1><p>Nagrody:</p><p>Doświadczenie: ${task.experience}</p><p>Złoto: 0</p>`;
}
