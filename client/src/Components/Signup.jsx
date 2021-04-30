import {
  Button,
  Container,
  Fade,
  Grow,
  IconButton,
  InputAdornment,
  LinearProgress,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Forms from "../Jsons/Forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(5),
    background: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  textField: {
    marginBottom: 8,
  },
  buttonSubmit: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    background: "#79CDCD",
    fontFamily: "Copperplate Papyrus",
  },
  buttonCancel: {
    fontWeight: "bold",
    fontFamily: "Copperplate Papyrus",
    marginTop: 10,
    marginBottom: 10,
    background: "#ed1c24",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

let schema = yup.object().shape({
  fname: yup.string().required("Please enter first name"),
  lname: yup.string().required("Please enter last name"),
  email: yup.string().required("Please enter email").email("Invalid email"),
  password: yup
    .string()
    .required("Please create a password ")
    .min(8, "Password should be atleast 8 digits long"),
  confPass: yup
    .string()
    .required("Please confirm password ")
    .min(8, "Password should be atleast 8 digits long"),
});

export default function Signup() {
  const classes = useStyles();
  const history = useHistory();

  const [message, setMessage] = useState("");
  const [issue, setIssue] = useState(false);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (formData) => {
    setLoad(true);
    try {
      const { data } = await axios.post(
        "https://smpl-user-auth.herokuapp.com/users/signup",
        formData
      );
      if (data.message) {
        setLoad(false);
        setMessage(data.message);
        setIssue(true);
        setTimeout(() => {
          setIssue(false);
        }, 3000);
      } else {
        localStorage.setItem("profile", JSON.stringify(data));
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
      setLoad(false);
      setMessage("Unable to register (Internal server error)");
      setIssue(true);
      setTimeout(() => {
        setIssue(false);
      }, 3000);
    }
    setLoad(false);
  };
  return (
    <>
      <Grow in>
        <Container maxWidth="sm" style={{ marginTop: 60, marginBottom: 60 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
              padding: 20,
            }}
          >
            <Fade in={issue}>
              <Paper style={{ padding: 10, background: "#ba160c" }}>
                <Typography style={{ color: "white" }} variant="h6">
                  {message}
                </Typography>
              </Paper>
            </Fade>
          </div>
          <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.form} noValidate>
              {Forms.map((form) => (
                <div key={form.name} className={classes.textField}>
                  <TextField
                    {...register(form.name)}
                    name={form.name}
                    type={
                      form.name === "password"
                        ? visible
                          ? "text"
                          : "password"
                        : form.type
                    }
                    variant="outlined"
                    label={form.label}
                    fullWidth
                    InputProps={{
                      endAdornment:
                        form.name === "password" ? (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => {
                                setVisible((preVisible) => !preVisible);
                              }}
                            >
                              {visible ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ) : (
                          <></>
                        ),
                    }}
                  ></TextField>
                  {errors[form.name] ? (
                    <p style={{ color: "#b22222", marginTop: -3 }}>
                      {errors[form.name].message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
              <div className={classes.buttons}>
                <Button
                  className={classes.buttonSubmit}
                  onClick={handleSubmit(submit)}
                >
                  Submit
                </Button>
                <Button
                  onClick={() => {
                    history.push("/");
                  }}
                  className={classes.buttonCancel}
                >
                  Cancel
                </Button>
              </div>
              <div className={classes.buttons}>
                <Typography
                  component={Link}
                  to="/login"
                  style={{ textDecoration: "none", marginTop: 10 }}
                  variant="body2"
                >
                  Have an account? Click here to Login
                </Typography>
              </div>
              {load && <LinearProgress />}
            </form>
          </Paper>
        </Container>
      </Grow>
    </>
  );
}
