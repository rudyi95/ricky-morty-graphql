import React from "react";

import Content from "../content";
import Header from "../header";

import useStyles from "./style";

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
