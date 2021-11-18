import React, { memo, useContext } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

import SmallUserCard from "../../components/SmallUserCard";
import ModalInfo from "../../components/ModalInfo";
import { CharactersContext } from "../../components/context/Characters";

import CharacterInfo from "../characterInfo";

import { GET_CHARECTERS } from "../../graphql/queries/character";

import useStyles from "./style";

interface IProps {
  currPage: number;
}

const CharactersList: React.FC<IProps> = ({ currPage }) => {
  const classes = useStyles();
  const { openModal, openModalHandler, cardId, pickCardHandler } = useContext(CharactersContext)

  const { data, loading } = useQuery<CharactersResponse>(GET_CHARECTERS, {
    variables: { page: currPage },
  });

  const characters: Character[] = data?.characters.results || [];

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.root}>
      {characters.map((character: Character, index: number) => (
        <SmallUserCard
          key={index}
          character={character}
          onClick={pickCardHandler}
        />
      ))}
      <ModalInfo open={openModal} onClose={openModalHandler}>
        <CharacterInfo id={cardId} />
      </ModalInfo>
    </div>
  );
};

export default memo(CharactersList);
