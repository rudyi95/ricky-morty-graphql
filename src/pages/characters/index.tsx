import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import CharactersList from "../../containers/charactersList";
import Pagination from "../../components/Pagination";
import { CharactersContextProvider } from "../../components/context/Characters";

import { GET_CHARACTERS_INFO } from "../../graphql/queries/character";

import useStyles from "./style";

const MainPage: React.FC = () => {
  const classes = useStyles();
  const [currPage, setCurrPage] = useState<number>(1);

  const { data, previousData } = useQuery<CharactersResponse>(
    GET_CHARACTERS_INFO,
    {
      variables: { page: currPage },
    }
  );

  const paginationInfo: Maybe<Info> = data?.characters.info;
  const prevPages = previousData?.characters.info.pages;
  const pages = paginationInfo?.pages || prevPages || 1;

  return (
    <div className={classes.root}>
      <CharactersContextProvider>
        <CharactersList currPage={currPage} />
        <Pagination pages={pages} onChangePage={setCurrPage} />
      </CharactersContextProvider>
    </div>
  );
};

export default MainPage;
