import {
  Button,
  Container,
  Grow,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    display: "flex",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#e50000",
    fontWeight: "bold",
  },
  paper: {
    borderRadius: 15,
    padding: "50px 0",
    background: "black",
  },
  buttonSignup: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 60,
    background: "#79CDCD",
  },
  buttonLogin: {
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
    background: "#66cd00",
  },
  image: {
    marginLeft: "15px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) history.push("/");
  return (
    <>
      <Grow in>
        <Container maxWidth="sm" align="center" style={{ marginTop: 50 }}>
          <Paper className={classes.paper}>
            <AccountCircleIcon style={{ color: "white" }} fontSize="large" />
            <Typography variant="h4" style={{ marginTop: 50, color: "white" }}>
              Name : {user.fname} {user.lname}
            </Typography>
            <Typography variant="h4" style={{ marginTop: 50, color: "white" }}>
              E-mail : {user.email}
            </Typography>
            <Button
              className={classes.buttonLogin}
              variant="contained"
              size="large"
              onClick={() => {
                localStorage.clear();
                history.push("/");
              }}
            >
              Logout
            </Button>
          </Paper>
        </Container>
      </Grow>
    </>
  );
}
