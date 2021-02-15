import {
  Button,
  Card,
  CardActions,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Accessibility from '../images/Accessibility.png';
import Blogging from '../images/Blogging.png';
import ITFund from '../images/IT-Fundamentals.png';
import Lambda from '../images/Lambda.png';
import NetworkFund from '../images/Network-Fundamentals.png';
import ReactNative from '../images/React-Native.png';
import Navigation from './Navigation';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 20,
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <div className='blog'>
        <Navigation />
        <div className='blog-header'>
          <h1>blog</h1>
        </div>
        <div className='blog-content'>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='Networking Fundamentals Blog Post'
              height='200'
              src={NetworkFund}
              title='Networking Fundamentals Blog Post'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/networking/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='IT Fundamentals Blog Post'
              height='200'
              src={ITFund}
              title='IT Fundamentals Blog Post'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/hardware/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='The Importance of Accessibility Blog'
              height='200'
              src={Accessibility}
              title='The Importance of Accessibility Blog'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/a11y/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='React Native Blog'
              height='200'
              src={ReactNative}
              title='React Native Blog'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/reactNative/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='Lambda School blog post'
              height='200'
              src={Lambda}
              title='Lambda School blog post'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/secondPost/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardMedia
              className='media'
              component='img'
              alt='Blogging blog post'
              height='200'
              src={Blogging}
              title='Blogging blog post'
            />
            <CardActions>
              <Button
                className='button'
                size='small'
                color='primary'
                href='https://www.diana-grams.com/blogging/'
                target='_blank'
              >
                View Blog
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Blog;
