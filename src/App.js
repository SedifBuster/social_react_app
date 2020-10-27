import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Nav/Nav";
import Profile from "./Profile/Profile";



function App() {
  return (
      <div className='app-wrapper'>
       <Header />
       <Navbar />
       <Profile />
      </div>
  );
}

export default App;
