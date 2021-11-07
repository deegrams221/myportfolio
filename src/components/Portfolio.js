import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Tooltip,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';
import CSSLogo from '../images/CSS.png';
import FirebaseLogo from '../images/firebase.png';
import FutureHope from '../images/future-hope.png';
import Git from '../images/git.png';
import Github from '../images/github-2.png';
import GoogleCloud from '../images/google.png';
import HTMLLogo from '../images/HTML.png';
import JSLogo from '../images/JS.png';
import KBAviary from '../images/k-b_aviary.png';
import MaterialUI from '../images/material-ui.png';
import NPOD from '../images/npod.png';
// import MERN from '../images/MERN.png';
import ReactLogo from '../images/react.png';
import Website from '../images/visit-website.png';
import Navigation from './Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 20,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 10,
    border: 'solid',
    width: 40,
    height: 40,
    color: 'black',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                showcase her birds and provide an easy way for potential clients
                to contact her.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title='Visit Website'>
                <Button
                  size='small'
                  color='primary'
                  href='https://k-b-aviary.netlify.app/'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Website}
                    alt='Visit Website'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='View Github'>
                <Button
                  size='small'
                  color='primary'
                  href='https://github.com/deegrams221/k-b_aviary'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Github}
                    alt='Visit Github'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='Expand'>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Technology Used:</Typography>
                <Typography>
                  HTML5 | Javascript | React.js | CSS3 | Material-UI | Google
                  Cloud Firebase Firestore
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.root}>
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
            <CardActions disableSpacing>
              <Tooltip title='Visit Website'>
                <Button
                  size='small'
                  color='primary'
                  href='https://future-hope-prod.netlify.com/'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Website}
                    alt='Visit Website'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='View Github'>
                <Button
                  size='small'
                  color='primary'
                  href='https://github.com/Lambda-School-Labs/future-hope-fe'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Github}
                    alt='Visit Github'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='Expand'>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Technology Used:</Typography>
                <Typography>
                  HTML5 | Javascript | React.js | CSS3 | Material-UI | Google
                  Cloud Firebase Firestore
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.root}>
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
                description of the photo. Consumes a 3rd party API service from
                NASA's "Astronomy Photo Of The Day".
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title='Visit Website'>
                <Button
                  size='small'
                  color='primary'
                  href='https://npod.netlify.app/'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Website}
                    alt='Visit Website'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='Visit Github'>
                <Button
                  size='small'
                  color='primary'
                  href='https://github.com/deegrams221/nasa-photo-of-the-day'
                  target='_blank'
                >
                  <img
                    className='button-img'
                    src={Github}
                    alt='Visit Github'
                    height={30}
                  />
                </Button>
              </Tooltip>
              <Tooltip title='Expand'>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Technology Used:</Typography>
                <Typography>HTML5 | Javascript | React.js | CSS3</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
