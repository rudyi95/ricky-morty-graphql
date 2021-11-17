import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

import useStyles from "./style";

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
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
  );
};

export default Dashboard;
