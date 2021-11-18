import { gql } from "@apollo/client";

export const GET_CHARECTER = gql`
  query getCharecter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        air_date
        episode
      }
      location {
        id
        name
        type
        dimension
      }
    }
  }
`;

export const GET_CHARECTERS = gql`
  query getCharecters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_SEARCHED_CHARECTERS = gql`
  query getCharecters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const GET_CHARACTERS_INFO = gql`
  query getCharecters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
