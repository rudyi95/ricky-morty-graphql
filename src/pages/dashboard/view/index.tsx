import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, Typography } from "@mui/material";

import SearchedList from "../../../containers/searchedList";
import SearchContainer from "../../../containers/searchBlock";

import Pagination from "../../../components/Pagination";
import { DashboardContext } from "../../../components/context/Dashboard";

import useStyles from "./style";

const DashboardView: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pages, setPage } = useContext(DashboardContext);

  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <SearchedList className={classes.serchedList} />
        <Pagination pages={pages} onChangePage={setPage} />
      </div>
      <div className={classes.categoryContainer}>
        <Card onClick={() => navigate("/characters")}>
          <CardContent>
            <Typography>Characters</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>Episodes</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>Planets</Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.searchContainer}>
        <SearchContainer />
      </div>
    </div>
  );
};

export default DashboardView;
