import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Tus me gusta",
    color: colors.yellow,
    cover:
      "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    artists: [ "Playlist", "5 canciones"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Tus episodios",
    color: colors.green,
    cover:
      "https://misc.scdn.co/your-episodes/SE-640.png",
    artists: ["Episodios guardados y descargaos"],
  },
  {
    id: '3',
    albumId: 3,
    title: "MANSION REGGEAETON",
    color: colors.rose,
    cover:
      "https://i.scdn.co/image/ab67706f00000002eb269767c9fa445f31cad4ca",
    artists: ["De la CALLE a la CIMA con EL FERXXO"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Mix diario 3",
    color: colors.blue,
    cover:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebfd4b16d39a63bfa0e8342273/3/es-419/default",
    artists: ["Ke Personajes", "El Pepo", "Damas Gratias y más"],
  },
  {
    id: '5',
    albumId: 5,
    title: "This Is Galee Galee",
    color: colors.purple,
    cover:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0fqHSy-default.jpg",
    artists: ["Playlist", "Spotify"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Mix diario 1",
    color: colors.orange,
    cover:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f19d4df57ae760cfbab33f5/1/es-419/default",
    artists: ["Anuel AA", "Arcangel", "bad bunny y más"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://misc.scdn.co/liked-songs/liked-songs-640.png`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://misc.scdn.co/liked-songs/liked-songs-640.png`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://misc.scdn.co/liked-songs/liked-songs-640.png`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://misc.scdn.co/liked-songs/liked-songs-640.png`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://misc.scdn.co/liked-songs/liked-songs-640.png`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://misc.scdn.co/your-episodes/SE-640.png`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://misc.scdn.co/your-episodes/SE-640.png`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://misc.scdn.co/your-episodes/SE-640.png`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://misc.scdn.co/your-episodes/SE-640.png`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://misc.scdn.co/your-episodes/SE-640.png`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "FERXXO 30",
    "image": `https://i.scdn.co/image/ab67616d000048511e76d5d8c654a8f5e640392b`,
    "artists": ["Feid"],
    "album": "Mor, NO Le Temas a La Oscuridad",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "UN PRIVIEW",
    "image": `https://i.scdn.co/image/ab67616d00004851c1156c6f6dedd4b9bdf89428`,
    "artists": ["Bad Bunny"],
    "album": "UN PRIVIEW",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "ANDO",
    "image": `https://i.scdn.co/image/ab67616d00004851b202099659d26bd5b144d02d`,
    "artists": ["Jere Klein", "Gittbeatz"],
    "album": "Ando",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "QLONA",
    "image": `https://i.scdn.co/image/ab67616d00004851d026bf9d7780f6a1267b4d03`,
    "artists": ["KAROL G", "Peso Pluma"],
    "album": "MAÑANA SERA MAS BONITO (BICHOTA SESON)",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Corazon Roto pt.3",
    "image": `https://i.scdn.co/image/ab67616d000048512cfe06902d86d09df823726e`,
    "artists": ["Brray", "Anuel AA", "Checho Corltone y mas"],
    "album": "Corazon Roto pt.3",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Un Finde | CROSSOVER #2",
    "image": "https://i.scdn.co/image/ab67616d00001e02fc9ce77ab8fcd9eadda3acd3",
    "artists": ["Big One", "FMK", "Ke personajes"],
    "album": "Un Finde | CROSSOVER #2",
    "duration": "3:10"
  },  
  {
    "id": 2,
    "albumId": 4,
    "title": "Pobre Corazón - En Vivo",
    "image": "https://i.scdn.co/image/ab67616d00001e0270bfe435a7dc698bbf0883cf",
    "artists": ["Ke personajes", "Onda Sabanera"],
    "album": "Pobre Corazón (En Vivo)",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Ya No Vuelvas (Versión Cuarteto)",
    "image": "https://i.scdn.co/image/ab67616d00001e02b061c89b210b4e16bd808976",
    "artists": ["Luck Ra", "La K'onga", "Ke personajes"],
    "album": "Ya No Vuelvas (Versión Cuarteto)",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "OJITOS ROJOS",
    "image": "https://i.scdn.co/image/ab67616d0000b27382ce4c7bbf861185252e82ae",
    "artists": ["Grupo Frintera", "Ke personajes"],
    "album": "El Comienzo",
    "duration": "3:40"
  },

  {
    "id": 5,
    "albumId": 4,
    "title": "Costumbres - Vivo",
    "image": "https://i.scdn.co/image/ab67616d00001e02b726cbc446c49872d64d333d",
    "artists": ["Damas Gratis", "Ke personajes"],
    "album": "Costumbres - Vivo",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://i.scdn.co/image/ab67616d0000485142cca2e4ada08122ea3ad1d9",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://i.scdn.co/image/ab67616d00004851a7099b596ed354b4dea361ea",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://i.scdn.co/image/ab6761670000ecd418e535352437976331311f33",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://i.scdn.co/image/ab67616d0000b273d0efc27f20fbb997bf1f100b",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://i.scdn.co/image/ab67616d00004851b348a6cca41baf41fce7b8a3",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "4:20"
  },

]