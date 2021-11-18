declare interface ICharactersContext {
  openModal: boolean;
  openModalHandler: () => void;
  cardId: Nullable<number>;
}

declare interface IDashboardContext {
  pages: number
  page: number
  filter: IFilter;
}

declare interface IFilter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}
