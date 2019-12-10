import React from "react";
import ProjectCard from "./components/Projects";
import {Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Diana Grams</h1>
      <p>I'm a Full Stack Web Developer. I have experience with HTML5, CSS3, JavaScript, React.js, React frameworks, Redux, Java(Backend), Springboot, Firebase Firestore, Jest, and Cypress. This is a small sampling of my projects, you can view more on my Github. I hope you enjoy my projects as much as I enjoyed creating them!</p>
      </header>
      
      <Route exact path = "/" component = {ProjectCard} />
    </div>
  );
}

export default App;