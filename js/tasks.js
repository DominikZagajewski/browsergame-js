//planowane zmiany: system do expa (randomizacja), zmiana czasu zadan, dodanie golda, dodanie zmeczenia

function getRandomTime() {
  return Math.floor(Math.random() * (10 - 5 + 1) + 1) * 1000;
}

const tasks = [
  {
    name: "Zgładź potwora",
    description: "Pokonaj potwora, który zagraża wiosce.",
    duration: getRandomTime(),
    experience: 140,
  },
  {
    name: "Patrol",
    description: "Udaj się na patrol",
    duration: getRandomTime(),
    experience: 500,
  },

  {
    name: "Obrona wsi",
    description: "Pomóż wiesniakom obronić się przed najazdem",
    duration: getRandomTime(),
    experience: 60,
  },
  {
    name: "Zbeszczeszona świątynia",
    description: "Oczyść świątynie z potworów",
    duration: getRandomTime(),
    experience: 99,
  },
  {
    name: "Ukryty skarb",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 65,
  },
  {
    name: "Zadanie 1",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 1,
  },
  {
    name: "Zadanie 2",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 5,
  },
  {
    name: "Zadanie 3",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 53,
  },
  {
    name: "Zadanie 4",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 82,
  },
  {
    name: "Zadanie 5",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 52,
  },
  {
    name: "Zadanie 6",
    description: "Odnajdź ukryty skarb",
    duration: getRandomTime(),
    experience: 35,
  },
];

// pełne
