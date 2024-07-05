import { v4 as randomUUID } from 'uuid';

export type notificationsProps = {
  id: string;
  content: string;
  tags: string[];
  extraTag?: string;
  url: string;
  coverImage: string;
};

export const notifications: notificationsProps[] = [

  {
    id: randomUUID(),
    content: 'information alert content',
    tags: ['alert'],
    extraTag: 'Setor 1',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('information alert content'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('alert') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    content: 'information sucess content',
    tags: ['sucess'],
    extraTag: 'Setor 2',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('information sucess content'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('sucess') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    content: 'information warning content',
    tags: ['warning'],
    extraTag: 'Setor 4',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('information warning content'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('warning') + '-285x380.jpg',
  },
  {
    id: randomUUID(),
    content: 'information information content',
    tags: ['information'],
    extraTag: 'Setor 5',
    url: 'https://www.google.com/search?q=' + encodeURIComponent('information information content'),
    coverImage:
      
    'https://static-cdn.jtvnw.net/ttv-boxart/' + encodeURIComponent('information') + '-285x380.jpg',
  },
];
