import { v4 as randomUUID } from 'uuid';

type GameProps = {
  id: string;
  name: string;
  tags: string[];
  extraTag?: string;
  url: string;
  coverImage: string;
};

export const games: GameProps[] = [
  // {
  //   id: randomUUID(),
  //   name: 'Brawlhalla',
  //   tags: ['Platform fighter', 'Multiplayer', 'Cross-Play'],
  //   extraTag: 'Stressful',
  //   url: 'https://brawlhalla.com/',
  //   coverImage:
  //     'https://static-cdn.jtvnw.net/ttv-boxart/460316_IGDB-285x380.jpg',
  // },
  // {
  //   id: randomUUID(),
  //   name: 'Undertale',
  //   tags: ['Indie', 'RPG', 'Emotional narrative'],
  //   extraTag: 'OST',
  //   url: 'https://undertale.com/',
  //   coverImage:
  //     'https://static-cdn.jtvnw.net/ttv-boxart/490713_IGDB-285x380.jpg',
  // },
  // {
  //   id: randomUUID(),
  //   name: 'Cuphead',
  //   tags: ['Retro', 'Run-and-gun', 'Co-op'],
  //   extraTag: 'OST',
  //   url: 'https://store.steampowered.com/app/268910/Cuphead/',
  //   coverImage:
  //     'https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg',
  // },
  // {
  //   id: randomUUID(),
  //   name: 'Metal Gear Rising: Revengeance',
  //   tags: ['Hack-and-slash', 'Action-packed', 'Epic Boss Fights'],
  //   extraTag: 'OST',
  //   url: 'https://store.steampowered.com/app/235460/METAL_GEAR_RISING_REVENGEANCE/',
  //   coverImage:
  //     'https://static-cdn.jtvnw.net/ttv-boxart/24208_IGDB-144x192.jpg',
  // },
  // {
  //   id: randomUUID(),
  //   name: 'Grand Theft Auto V',
  //   tags: ['Open world', 'Multiplayer', 'Action'],
  //   extraTag: 'Classic',
  //   url: 'https://www.rockstargames.com/gta-v',
  //   coverImage:
  //     'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg',
  // },
  {
    id: randomUUID(),
    name: 'Need for Speed: Underground',
    tags: ['Racing', 'Action', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Need for Speed: Underground'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Need for Speed: Underground') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Need for Speed: Underground 2',
    tags: ['Racing', 'Action', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Need for Speed: Underground 2'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Need for Speed: Underground 2') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Valorant',
    tags: ['Action', 'FPS', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Valorant'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Valorant') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Super Mario Odyssey',
    tags: ['Action', 'Platformer', 'Multiplayer'],
    extraTag: 'Nintendo',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Super Mario Odyssey'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Super Mario Odyssey') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Counter-Strike: Global Offensive',
    tags: ['Action', 'FPS', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Counter-Strike: Global Offensive'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Counter-Strike: Global Offensive') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Dota 2',
    tags: ['Action', 'MOBA', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Dota 2'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Dota 2') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'League of Legends',
    tags: ['MOBA', 'Multiplayer'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('League of Legends'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('League of Legends') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    name: 'Hearthstone',
    tags: ['Card game', 'Strategy'],
    extraTag: 'PC',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('Hearthstone'),
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('Hearthstone') + '-285x380.jpg',
  },
];
