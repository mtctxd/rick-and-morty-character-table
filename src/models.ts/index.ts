export interface IAppState {
  charactersList: Character[],
  preparedCharacterList: Character[],
  searchQuery: string;
  filterOptions: IFilterOptions<filterOption>,
}

export interface IFilterOptions<T = filterOption> {
  [key: string]: T,
  // [OptionKey.species]: filterOption,
  // [OptionKey.origin]: filterOption,
  // [OptionKey.status]: filterOption,
}

export enum OptionKey {
  species = 'species',
  origin = 'origin',
  status = 'status'
}

interface filterOption {
  [key: string]: boolean
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface OriginEntry {
  id: number,
  name: string,
  type: string,
  dimennsion: string,
  residents: string[],
  created: string,
}

interface Origin {
  name: string;
  url: string;
  entry?: OriginEntry,
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
}

export interface ICharactersFromApi {
  info: Info;
  results: Character[];
}
