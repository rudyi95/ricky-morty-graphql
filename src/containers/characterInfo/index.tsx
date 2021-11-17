import React from "react";
import classNames from "classnames";
import { useQuery } from "@apollo/client";

import CustomImage from "../../components/CustomImage";

import { GET_CHARECTER } from "../../graphql/queries/character";

import useStyles from "./style";

interface IProps {
  id: Nullable<number>;
}

const CharacterInfo: React.FC<IProps> = ({ id }) => {
  const classes = useStyles();

  const { data, error, loading } = useQuery<CharacterResponse>(GET_CHARECTER, {
    variables: { id },
  });

  const character: Maybe<Character> = data?.character;

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <CustomImage
          src={character?.image}
          alt="Character"
          loading={loading && !!id}
        />
      </div>
      {!!error?.graphQLErrors[0] && (
        <div className={classes.error}>{error.graphQLErrors[0].message}</div>
      )}
      {character && (
        <div className={classes.characterInfo}>
          <div>{character.name}</div>
          <div className={classes.columnGroup}>
            <div className={classes.categoryColumn}>
              <span>Species:</span>
              <span>Type:</span>
              <span>Location:</span>
              <span>Origin:</span>
              <span>Status:</span>
            </div>
            <div className={classes.infoColumn}>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.species || character.species === "unknown",
                })}
              >
                {character.species}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.type || character.type === "unknown",
                })}
              >
                {character.type || "unknown"}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.location.name ||
                    character.location.name === "unknown",
                })}
              >
                {character.location.name}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.origin.name ||
                    character.origin.name === "unknown",
                })}
              >
                {character.origin.name}
              </span>
              <span
                className={classNames({
                  [classes.green]: character.status === "Alive",
                  [classes.red]: character.status === "Dead",
                })}
              >
                {character.status}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;
