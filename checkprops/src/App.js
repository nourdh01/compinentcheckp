import React from 'react';
import './App.css';
import Profile from "./profile/profilecomponent";
import myImage from './profilephoto.jpg';

function App() {
  return (
    <div className="App">
    <Profile fullname="nour" bio="ingenieur informatique j'ai 25ans" profession="ingenieur "> <img src={myImage}alt='imgg'/></Profile> 
    <Profile fullname="rayhan" bio="etudiant " profession="medecin "> <img src={myImage}alt='imgg' /></Profile> 
    <Profile fullname="jeff" bio="j'ai 22ans et je travail .." profession="ouvrier "> <img src={myImage}alt='imgg' /></Profile> 
    </div>
  );
}

export default App;
