import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";

import CustomImage from "../../components/CustomImage";
import { DashboardContext } from "../../components/context/Dashboard";

import { GET_SEARCHED_CHARECTERS } from "../../graphql/queries/character";

import useStyles from "./style";

interface IProps {
  className?: string;
}

const SearchedList: React.FC<IProps> = ({ className }) => {
  const classes = useStyles();
  const { filter, page, setPages } = useContext(DashboardContext);

  const { data, previousData, loading } = useQuery<CharactersResponse>(
    GET_SEARCHED_CHARECTERS,
    {
      variables: { page, filter },
      onCompleted: () => {
        setPages(
          data?.characters.info.pages ||
            previousData?.characters.info.pages ||
            1
        );
      },
    }
  );

  const characters: Character[] = data?.characters.results || [];

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className={classNames(classes.root, className)}>
      {characters.map((item: Character) => {
        return (
          <CustomImage
            className={classes.image}
            src={item.image}
            alt={item.image}
          />
        );
      })}
    </div>
  );
};

export default SearchedList;
