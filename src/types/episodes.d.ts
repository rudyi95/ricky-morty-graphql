declare interface Episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Character[]
    created: string
  }
  
  declare interface Episodes {
    info: Info
    results: Episode[]
  }