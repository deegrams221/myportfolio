import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CSSLogo from '../images/CSS.png';
import FirebaseLogo from '../images/firebase.png';
import FutureHope from '../images/future-hope.png';
import Git from '../images/git.png';
import GoogleCloud from '../images/google.png';
import HTMLLogo from '../images/HTML.png';
import JSLogo from '../images/JS.png';
import KBAviary from '../images/k-b_aviary.png';
import MaterialUI from '../images/material-ui.png';
import NPOD from '../images/npod.png';
// import MERN from '../images/MERN.png';
import ReactLogo from '../images/react.png';
import Navigation from './Navigation';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 20,
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <div className='portfolio'>
        <Navigation />
        <div className='portfolio-header'>
          <h1>Portfolio</h1>
        </div>
        <div className='skills'>
          <img className='skill-img' src={Git} alt='Git Logo' />
          <img className='skill-img' src={HTMLLogo} alt='HTML Logo' />
          <img className='skill-img' src={CSSLogo} alt='CSS Logo' />
          <img className='skill-img' src={JSLogo} alt='JS Logo' />
          <img className='skill-img' src={ReactLogo} alt='React.js Logo' />
          <img className='skill-img' src={MaterialUI} alt='Material-UI Logo' />
          {/* <img className='skill-img' src={MERN} alt='MERN Stack logos' /> */}
          <img
            className='skill-img'
            src={GoogleCloud}
            alt='Google Cloud Logo'
          />
          <img className='skill-img' src={FirebaseLogo} alt='Firebase Logo' />
        </div>
        <div className='portfolio-content'>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className='media'
                component='img'
                alt='KB Aviary website'
                height='200'
                src={KBAviary}
                title='KB Aviary website'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  K & B Aviary
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This site was built for a bird breeder with the intention to
                  showcase her birds and provide an easy way for potential
                  clients to contact her.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://kbaviary.com/'
                target='_blank'
              >
                View Website
              </Button>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://github.com/deegrams221/k-b_aviary'
                target='_blank'
              >
                View Github
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className='media'
                component='img'
                alt='Future Hope School in the Sky website'
                height='200'
                src={FutureHope}
                title='Future Hope School in the Sky website'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Future Hope School in the Sky
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  A non-profit to assist Ghanaian and Nigerian students qualify
                  for admission into secondary and vocational schools.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://future-hope-prod.netlify.com/'
                target='_blank'
              >
                View Website
              </Button>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://github.com/Lambda-School-Labs/future-hope-fe'
                target='_blank'
              >
                View Github
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className='media'
                component='img'
                alt='NASA Photo of the Day website'
                height='200'
                src={NPOD}
                title='NASA Photo of the Day website'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  NASA Photo of the Day
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This app returns the Nasa Photo of the day along with a
                  description of the photo. Consumes a 3rd party API service
                  from NASA's "Astronomy Photo Of The Day".
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://npod.netlify.app/'
                target='_blank'
              >
                View Website
              </Button>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://github.com/deegrams221/nasa-photo-of-the-day'
                target='_blank'
              >
                View Github
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
