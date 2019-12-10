import React from 'react';

// styles - material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// images
import wanderlustImg from "../images/wanderlust.png";
import githubUserCardImg from "../images/github-usercard.png";
import newsfeedImg from "../images/newsfeed-components.png";
import npodImg from "../images/npod.png";
import reactWarsImg from "../images/react-wars.png";
import singlePageAppImg from "../images/single-page-app.png";
import reactTodoImg from "../images/react-todo-list.png";
import luncherImg from "../images/luncher.png";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// material-ui style function
const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 50,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 351,
    maxWidth: 351
  },
  cover: {
    width: 351,
  },
}));

// project cards
export default function ProjectCards() {
  const classes = useStyles();

  return (
    <div className="project-cards">
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
            WANDERLUST
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            This project was my first build week project. During this build week I had the oportunity to work in a team with two really amazing developers. I worked on the product landing page, the about us page and the contact us page. I used HTML, CSS, and LESS to accomplish this. And had a really great time doing it!
            </Typography>
          </CardContent>
        </div>
        <a href="https://github.com/build-week-wanderlust/user-interface" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://wanderlust-adventure-awaits.netlify.com/index.html" target="_blank"><img src={wanderlustImg} alt="Wanderlust Build Week project screenshot" height={200} width={350} /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              GITHUB USERCARD
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In this project I used HTML, CSS, and created DOM components with Javascript Functions. I utilized 3rd party libraries (axios), promises, .then and .catch, HTTP GET requests, and array methods.
            </Typography>
          </CardContent>
        </div>
        <br />
        <br />
        <br />
        <br />
        <a href="https://github.com/deegrams221/github-usercard" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://github-usercard.netlify.com/" target="_blank"><img src={githubUserCardImg} alt="Github Usercard project screenshot" height={200} width={350} /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              NEWSFEED COMPONENTS
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In this project I built a news feed reader. With a collapsing menu, and expandable news articles. The CSS and some of the HTML was already setup in the project. I connected the CSS and built out the components using JavaScript. I added common functionality and styling to build reusable components.
            </Typography>
          </CardContent>
        </div>
        <br />
        <a href="https://github.com/deegrams221/Newsfeed-Components" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://news-components.netlify.com/" target="_blank"><img src={newsfeedImg} alt="Newsfeed Components project screenshot" height={200} width={350} /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              NASA PHOTO OF THE DAY
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In this project I consumed the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once I fetched the data, I built a few components that rendered different pieces of data in the interface. I styled the app using the Styled-Components
            </Typography>
          </CardContent>
        </div>
        <br />
        <br />
        <a href="https://github.com/deegrams221/nasa-photo-of-the-day" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://npod.netlify.com/" target="_blank"><img src={npodImg} alt="Nasa Photo Of the Day project screenshot" height={200} width={350} /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              REACT WARS
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In this project I fetched a list of Star Wars characters from the Star Wars API (or SWAPI) and rendered them to the screen. Followed the documentation to learn how to fetch a list of "people". Set the data I fetched to state. Mapped over the list and rendered a component for each character on the page. The elements were styled using the Styled-Components library.
            </Typography>
          </CardContent>
        </div>
        <a href="https://github.com/deegrams221/Sprint-Challenge-React-Wars" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://github.com/deegrams221/Sprint-Challenge-React-Wars" target="_blank"><img src={reactWarsImg} alt="React Wars project screenshot" height={200} width={350} /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              SINGLE-PAGE APPS
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            I constructed a Single Page Application with React incorporating three page components to display data from three API endpoints. Created a component to show a grid of data from the API. Included useState, useEffect, and used Axios to make a GET request to each endpoint. Used Semantic-UI for styling, and added a Router using React Router.
            </Typography>
          </CardContent>
        </div>
        <a href="https://github.com/deegrams221/Sprint-Challenge-Single-Page-Apps" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://singlepageapp-lambda.netlify.com/" target="_blank"><img src={singlePageAppImg} alt="Single page Rick and Morty project screenshot" height={200} width={350} 
        /></a>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              REACT TODO LIST
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In this project I built the components to complete the Todo List application. The todo list is fully functional. The user can add items, mark items complete and remove completed items.
            </Typography>
          </CardContent>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="https://github.com/deegrams221/React-Todo" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://react-todo-l9nvethuu.now.sh/" target="_blank"><img src={reactTodoImg} alt="React Todo List project screenshot" height={200} width={350} /></a>
      </Card>
      
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              LUNCHER APP
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            With this project I had the oportunity to work in a 6 developer team. I really liked the concept of this project: "At Luncher, we help school districts that have a shortfall in their lunch budgets to locate willing donors." 
            </Typography>
          </CardContent>
        </div>
        <br />
        <br />
        <br />
        <a href="https://github.com/bw-lunchr/frontend" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><br />
				<a href="https://lambda-luncher.netlify.com/" target="_blank"><img src={luncherImg} alt="Luncher Build Week project screenshot" height={200} width={350} /></a>
      </Card>
    </div>
  );
}