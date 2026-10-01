export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  country: string;
}

export interface Achievements {
  medals: string;
  cups: string;
  goals: number;
}

export interface ClubData {
  id: number;
  name: string;
  city: string;
  founded: number;
  logo: string;
  achievements: Achievements;
  squad: Player[];
}

export const clubs: ClubData[] = [
  {
    id: 1,
    name: "Динамо Київ",
    city: "Київ",
    founded: 1927,
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/FC_Dynamo_Kyiv_logo.svg",
    achievements: {
      medals: "16x Чемпіони України, 13x Чемпіони СРСР",
      cups: "13x Кубок України",
      goals: 2450,
    },
    squad: [
      { id: 1, name: "Георгій Бущан", position: "Воротар", number: 1, country: "Україна" },
      { id: 2, name: "Андрій Ярмоленко", position: "Півзахисник", number: 7, country: "Україна" },
      { id: 3, name: "Віталій Буяльський", position: "Півзахисник", number: 29, country: "Україна" },
    ],
  },
  {
    id: 2,
    name: "Шахтар Донецьк",
    city: "Донецьк",
    founded: 1936,
    logo: "https://upload.wikimedia.org/wikipedia/uk/0/02/FC_Shakhtar_Donetsk_logo.svg",
    achievements: {
      medals: "15x Чемпіони України, 1x Кубок УЄФА",
      cups: "14x Кубок України",
      goals: 2300,
    },
    squad: [
      { id: 1, name: "Дмитро Різник", position: "Воротар", number: 31, country: "Україна" },
      { id: 2, name: "Тарас Степаненко", position: "Півзахисник", number: 6, country: "Україна" },
      { id: 3, name: "Данило Сікан", position: "Нападник", number: 14, country: "Україна" },
    ],
  },
]