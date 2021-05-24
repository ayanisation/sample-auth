import {
  Button,
  Container,
  Fade,
  Grow,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useHistory } from "react-router";
import addImg from "../Images/addImg.svg";

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
    padding: "50px 25px",
    background: "black",
  },
  buttonSignup: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 60,
    background: "#79CDCD",
  },
  buttonUpload: {
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
    background: "#66cd00",
    width: "50%",
    textAlign: "center",
  },
  image: {
    marginLeft: "15px",
  },
  imgdiv: {
    height: 300,
    width: "80%",
    background: "white",
    border: "2px solid",
    margin: "20px 0",
  },
}));

export default function Upload() {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) history.push("/login");

  const [message, setMessage] = useState("");
  const [issue, setIssue] = useState(false);
  const [load, setLoad] = useState(false);

  const [imgData, setData] = useState({
    uploader: user?.email,
    image: addImg,
  });

  const uploadImg = async () => {
    setLoad(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/images",
        imgData
      );
      console.log(data);
      setLoad(false);
      setMessage(data.message);
      setIssue(true);
      setTimeout(() => {
        setIssue(false);
      }, 3000);
      setData({ ...imgData, image: addImg });
    } catch (error) {
      setLoad(false);
      if (error.response.status === 413)
        setMessage("Image too large. Maximum 500KB allowed");
      else setMessage("Unable to upload (Internal server error)");
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
        <Container maxWidth="sm" align="center">
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
            <Button
              style={{
                textDecoration: "none",
                color: "white",
                float: "right",
                marginTop: -20,
              }}
              onClick={() => {
                localStorage.clear();
                history.push("/login");
              }}
            >
              Logout
            </Button>
            <Typography variant="h4" style={{ marginTop: 50, color: "white" }}>
              Upload Image
            </Typography>
            <div className={classes.imgdiv}>
              <img
                height="100%"
                width="100%"
                src={imgData.image}
                alt="broken"
              />
            </div>
            <FileBase
              type="file"
              fullWidth
              multiple={false}
              onDone={({ base64 }) => {
                setData({ ...imgData, image: base64 });
              }}
            />
            <Button
              className={classes.buttonUpload}
              fullWidth
              disabled={imgData.image === addImg ? true : false}
              variant="contained"
              size="large"
              onClick={uploadImg}
            >
              Upload
            </Button>
            {load && <LinearProgress />}
          </Paper>
        </Container>
      </Grow>
    </>
  );
}
