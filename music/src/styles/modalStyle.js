import { makeStyles, theme } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    height: "70%",
    paddingTop: "5%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    padding: "11% 3%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
