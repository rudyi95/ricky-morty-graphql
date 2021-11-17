import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pagination: {
    width: "50%",
    display: "flex",

    "& ul": {
      display: "flex",
      justifyContent: "space-evenly",
      listStyle: "none",
      width: "100%",
    },
  },
}));

export default useStyles;
