import { Tv, Clapperboard } from "lucide-react";
import { LifeCategory } from "@/types/life";

export const lifeCategories: LifeCategory[] = [
  {
    id: "anime",
    title: "Anime",
    description: "Anime series that have captivated and inspired me.",
    icon: <Tv className="size-5" />,
    href: "/life/anime",
    items: [
      {
        id: "dragon-ball-z",
        title: "Dragon Ball Z",
        year: "1989–1996",
        image: "/life/anime/dragon-ball-z.jpg",
      },
      {
        id: "one-piece",
        title: "One Piece",
        year: "1999–Ongoing",
        image: "/life/anime/one-piece.jpg",
      },
      {
        id: "vinland-saga",
        title: "Vinland Saga",
        year: "2019–2023",
        image: "/life/anime/vinland-saga.jpg",
      },
      {
        id: "death-note",
        title: "Death Note",
        year: "2006–2007",
        image: "/life/anime/death-note.jpg",
      },
      {
        id: "naruto",
        title: "Naruto",
        year: "2002–2017",
        image: "/life/anime/naruto.jpg",
      },
      {
        id: "one-punch-man",
        title: "One Punch Man",
        year: "2015–2025",
        image: "/life/anime/one-punch-man.jpg",
      },
      {
        id: "attack-on-titan",
        title: "Attack on Titan",
        year: "2013–2023",
        image: "/life/anime/attack-on-titan.jpg",
      },
      {
        id: "bleach",
        title: "Bleach",
        year: "2004–2026",
        image: "/life/anime/bleach.jpg",
      },
      {
        id: "hunter-x-hunter",
        title: "Hunter x Hunter",
        year: "2011–2014",
        image: "/life/anime/hunter-x-hunter.jpg",
      },
    ],
  },
  {
    id: "series",
    title: "Series",
    description: "TV series that have left a lasting impression on me.",
    icon: <Clapperboard className="size-5" />,
    href: "/life/series",
    items: [
      {
        id: "dark-netflix",
        title: "Dark",
        year: "2017–2020",
        image: "/life/series/dark-netflix.jpg",
      },
      {
        id: "game-of-thrones",
        title: "Game of Thrones",
        year: "2011–2019",
        image: "/life/series/game-of-thrones.jpg",
      },
      {
        id: "breaking-bad",
        title: "Breaking Bad",
        year: "2008–2013",
        image: "/life/series/breaking-bad.jpg",
      },
      {
        id: "suits",
        title: "Suits",
        year: "2011–2019",
        image: "/life/series/suits.jpg",
      },
      {
        id: "friends",
        title: "Friends",
        year: "1994–2004",
        image: "/life/series/friends.jpg",
      },
      {
        id: "how-i-met-your-mother",
        title: "How I Met Your Mother",
        year: "2005–2014",
        image: "/life/series/how-i-met-your-mother.jpg",
      },
      {
        id: "money-heist",
        title: "Money Heist",
        year: "2017–2021",
        image: "/life/series/money-heist.jpg",
      },
    ],
  },
];
