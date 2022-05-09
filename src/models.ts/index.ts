export interface IAppState {
  charactersList: Character[];
  preparedCharacterList: Character[];
  searchQuery: string;
  filterOptions: IFilterOptions;
  headerCheckboxStatus: boolean;
  sortTypes: SortCondition<SortTypes>;
}

export type SortTypes = 'name' | 'origin' | 'episode' | 'status' | 'location';

export type SortCondition<P extends string> = {
  [Property in P]: {
    isReversed: boolean,
  }
}

export interface IFilterOptions {
  origin: string;
  status: string;
  species: string;
}

export interface filterOption {
  value: string;
  label: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Origin {
  name: string;
  url: string;
  entry?: string;
}

interface Location {
  name: string;
  url: string;
  type: string;
}

interface Episode {
  url: string[];
  names: string[];
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode;
  url: string;
  created: string;
  isChecked: boolean;
}

export interface ICharactersFromApi {
  info: Info;
  results: Character[];
}

export interface IEpisodeFromApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
