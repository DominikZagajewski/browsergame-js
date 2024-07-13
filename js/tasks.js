//planowane zmiany: system do expa, zmiana czasu zadan

function getRandomTime() {
  return Math.floor(Math.random() * (10 - 5 + 1) + 1) * 1000;
}

const tasks = [
  {
    name: "Zgładź potwora",
    description: "Pokonaj potwora, który zagraża wiosce.",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Patrol",
    description: "Udaj się na patrol",
    duration: getRandomTime(),
    experience: 100,
  },

  {
    name: "Obrona wsi",
    description: "Pomóż wiesniakom obronić się przed najazdem",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zbeszczeszona świątynia",
    description: "Oczyść świątynie z potworów",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Ukryty skarb",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 1",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 2",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 3",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 4",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 5",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
  {
    name: "Zadanie 6",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 100,
  },
];

// pełne
