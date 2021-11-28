declare interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

declare interface FilterCharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

declare interface FilterEpisode {
  name: string;
  episode: string;
}

declare interface FilterLocation {
  name: string;
  type: string;
  dimension: string;
}

declare type Nullable<T> = T | null;

declare type Maybe<T> = T | undefined;

declare interface RouteProps {
  path: string;
  element: ExoticComponent;
  exact?: boolean;
  name?: string;
}

declare interface SelectItem {
  value: string | number;
  label: string | number;
}
