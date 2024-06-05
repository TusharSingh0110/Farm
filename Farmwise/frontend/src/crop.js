import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import logo from "./logo.png";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.common.white),
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#ffffff7a",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  logo: {
    position: "absolute",
    left: "1480px"
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    alignItems: 'center',
    marginLeft: '950px'
  },
  cont: {
    marginTop: '50px'
  }
}));

export const PredictionPage = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const sendFile = async () => {
    let formData = new FormData();
    // Add additional data to the FormData
    formData.append("nitrogen", data.nitrogen);
    formData.append("phosphorus", data.phosphorus);
    formData.append("potassium", data.potassium);
    formData.append("temperature", data.temperature);
    formData.append("humidity", data.humidity);
    formData.append("ph", data.ph);
    formData.append("rainfall", data.rainfall);

    try {
      // Send a POST request with the FormData
      // let res = await axios.post(process.env.REACT_APP_API_URL2, formData);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL2,
        data: formData,
      });

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      // Handle error
      console.error("Error sending file:", error);
    }
  };
  
  return (
    <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            FarmWise : Where Innovation Meets the Field
          </Typography>
          <div className={classes.grow} />
          <Link to="/" className={classes.links}>Disease </Link>
          <Avatar src={logo} className={classes.logo}/>
        </Toolbar>
      </AppBar>
      <Container className={classes.cont}>
        <Grid container spacing={3}>
          {/* Input fields for values */}
          <Grid item xs={6}>
            <TextField
              label="Nitrogen"
              variant="outlined"
              fullWidth
              value={data.nitrogen}
              onChange={(e) => setData({ ...data, nitrogen: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phosphorus"
              variant="outlined"
              fullWidth
              // value={inputs.phosphorus}
              // onChange={handleInputChange("phosphorus")}
              value={data.phosphorus}
              onChange={(e) => setData({ ...data, phosphorus: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Potassium"
              variant="outlined"
              fullWidth
              // value={inputs.potassium}
              // onChange={handleInputChange("potassium")}
              value={data.potassium}
              onChange={(e) => setData({ ...data, potassium: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Temperature"
              variant="outlined"
              fullWidth
              // value={inputs.phLevel}
              // onChange={handleInputChange("phLevel")}
              value={data.temperature}
              onChange={(e) => setData({ ...data, temperature: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Humidity"
              variant="outlined"
              fullWidth
              // value={inputs.phLevel}
              // onChange={handleInputChange("phLevel")}
              value={data.humidity}
              onChange={(e) => setData({ ...data, humidity: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="pH Level"
              variant="outlined"
              fullWidth
              // value={inputs.phLevel}
              // onChange={handleInputChange("phLevel")}
              value={data.ph}
              onChange={(e) => setData({ ...data, ph: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Rainfall (mm)"
              variant="outlined"
              fullWidth
              // value={inputs.rainfall}
              // onChange={handleInputChange("rainfall")}
              value={data.rainfall}
              onChange={(e) => setData({ ...data, rainfall: e.target.value })}
            />
          </Grid>
          {/* Button to predict */}
          <Grid item xs={12}>
            <ColorButton
              variant="contained"
              color="primary"
              fullWidth
              onClick={sendFile}
            >
              Predict
            </ColorButton>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
