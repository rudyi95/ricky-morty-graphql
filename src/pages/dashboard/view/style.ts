import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
  },
  infoContainer: {
    width: "40%",
    height: 570,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
  },
  serchedList: {
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  categoryContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

    "& > div": {
      cursor: "pointer",
    },
  },
  searchContainer: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
