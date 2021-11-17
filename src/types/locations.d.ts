declare interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
}


declare interface Locations {
    info: Info
    results: Location[]
  }