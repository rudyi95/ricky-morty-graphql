import React, { useContext } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

import { DashboardContext } from "../../components/context/Dashboard";

import useStyles from "./style";

const SearchContainer: React.FC = () => {
  const classes = useStyles();
  const { setFilter } = useContext(DashboardContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
    },
    onSubmit: (e: IFilter) => setFilter(e),
  });

  return (
    <form
      className={classes.root}
      onChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        name="status"
        label="Status"
        variant="outlined"
        value={formik.values.status}
        onChange={formik.handleChange}
      />
      <TextField
        name="species"
        label="Species"
        variant="outlined"
        value={formik.values.species}
        onChange={formik.handleChange}
      />
      <TextField
        name="type"
        label="Type"
        variant="outlined"
        value={formik.values.type}
        onChange={formik.handleChange}
      />
      <TextField
        name="gender"
        label="Gender"
        variant="outlined"
        value={formik.values.gender}
        onChange={formik.handleChange}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};

export default SearchContainer;
