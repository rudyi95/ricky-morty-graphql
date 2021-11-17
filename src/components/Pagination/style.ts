import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
    display: "flex",

    "& ul": {
      display: "flex",
      justifyContent: "space-evenly",
      listStyle: "none",
      width: "100%",
    },

    "& li": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
