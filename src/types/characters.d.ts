declare interface Character {
  id: number;
  name: string;
  species: string;
  type: string;
  status: string;
  image: string;
  gender: string;
  origin: Location;
  location: Location;
  episode: Episode[];
  created: string;
}

declare interface Characters {
  info: Info;
  results: Character[];
}

declare interface CharacterResponse {
  character: Character;
}

declare interface CharactersResponse {
  characters: Characters;
}
