import React from 'react';
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faYoutube, faTwitter, faInstagram, faLinkedin, faInternetExplorer, } from '@fortawesome/free-brands-svg-icons'
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import './Home.css'

const useStyles = makeStyles((theme) => ({
  title: {
    color: "black",
  },
  subtitle: {
    color: "#0f2699",
    fontSize: "5px"
  },
}));
const Dashboard = () => {
  const classes = useStyles();

  return (
    <div id='back'>
      <Box className="typedContainer">
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Muhammad Usman"]} typeSpeed={40} />
        </Typography>
        <Typography className={classes.subtitle} >
          <Typed
            strings={[
              "Full Stack Developer",
              "Blockchain Developer",
              "Game Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <div id="social">
          <a href='https://github.com/Muhammadansriaz' target="blank"><FontAwesomeIcon className='Icon' icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/ans-riaz-28b537220/' target="blank"><FontAwesomeIcon className='Icon' icon={faLinkedin} /></a>
          <a href='https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=en-GB' target="blank"><FontAwesomeIcon className='Icon' icon={faYoutube} /></a>
          <a href='https://twitter.com/Musmanfullstack' target="blank"><FontAwesomeIcon className='Icon' icon={faTwitter} /></a>
          <a href='https://unialsolutions.com/' target="blank"><FontAwesomeIcon className='Icon' icon={faInternetExplorer} /></a>
          <a href='https://www.facebook.com/ans.riaz.50/' target="blank"><FontAwesomeIcon className='Icon' icon={faFacebook} /></a>
          <a href='https://www.instagram.com/musmanfullstack/' target="blank"> <FontAwesomeIcon className='Icon' icon={faInstagram} /></a>
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;