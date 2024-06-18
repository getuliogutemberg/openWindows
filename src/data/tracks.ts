import { v4 as randomUUID } from 'uuid';



type TrackProps = {
  id: string;
  name: string;
  artists: {
    name: string;
    url: string;
  }[];
  albumImage: string;
  url: string;
};

export const tracks: TrackProps[] = [
  {
    id: randomUUID(),
    name: 'Original Music from the Motion Picture Ayrton Senna',
    artists: [
      {
        name: 'Antonio Pinto',
        url: 'https://open.spotify.com/search/' + encodeURIComponent('Antonio Pinto') + '/artists',
      },
    ],
    albumImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zlzMOc3npVWI9cBI6_kd_FZaePPHBklrFfhgEO7JtDyXmYG7UBEKw3fxnihIkL31KxE&usqp=CAU',
    // url: 'https://open.spotify.com/search/' + encodeURIComponent('Ayrton Senna') + '/albums',
    url: 'https://open.spotify.com/intl-pt/album/71j2ZNSAk1jkbagJcpy8IL',
  },
  {
    id: randomUUID(),
    name: 'Valse a Vapor',
    artists: [
      {
        name: 'Phill Veras',
        url: 'https://open.spotify.com/search/' + encodeURIComponent('Phill Veras') + '/artists',
      },
    ],
    albumImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4AOcqtHLxRI8bddin3mWklYUspm1YE4vAA&s',
    // url: 'https://open.spotify.com/search/' + encodeURIComponent('Valse a Vapor') + '/albums',
    url: 'https://open.spotify.com/intl-pt/track/259yZvDXJBJuWyha8DXMzU',
  },
  
];
