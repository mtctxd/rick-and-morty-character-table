import { Character } from "./models.ts";
import { v4 as uuidv4 } from 'uuid';

export const API_RNM = 'https://rickandmortyapi.com/api';
export const ITEMS_PER_PAGE = 5;

export const LOADER_CHARACTER: Character = {
    id: uuidv4(),
    name: 'Loading characters...',
    status: 'unknown',
    species: 'loading...',
    type: 'loading...',
    gender: 'loading...',
    origin: {
        name: 'unknown',
        url: 'loading...'
    },
    location: {
        name: 'loading...',
        type: 'loading...',
        url: 'loading...'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: {
        names: ['loading...', 'loading...'],
        url: ['loading...']
    },
    url: 'loading...',
    created: 'loading...',
    isChecked: false,
  }