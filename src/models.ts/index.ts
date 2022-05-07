export interface IAppState {
  charactersList: Character[],
  preparedCharacterList: Character[],
  searchQuery: string;
  filterOptions: IFilterOptions,
}

export interface IFilterOptions {
  origin: string,
  status: string,
  species: string,
}

export interface filterOption {
  value: string,
  label: string,
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
  entry?: string,
}

interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  shouldDelete: boolean
}

export interface ICharactersFromApi {
  info: Info;
  results: Character[];
}
