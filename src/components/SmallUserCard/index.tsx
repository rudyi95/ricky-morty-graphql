import React, { BaseSyntheticEvent } from "react";

import CustomImage from "../CustomImage";

import useStyles from "./style";

interface IProps {
  character: Character;
  onClick?: (e: BaseSyntheticEvent) => void;
}

const SmallCard: React.FC<IProps> = ({ character, onClick }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      id={character.id.toString()}
      onClick={onClick}
    >
      <CustomImage src={character.image} alt="Character" />
      <div>{character.name}</div>
    </div>
  );
};

export default SmallCard;
