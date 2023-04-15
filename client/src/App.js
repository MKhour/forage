import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Leaderboard from './components/Leaderboard';
import InvasiveDetection from './components/InvasiveDetection';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='user' element={<UserPage/>} />
              <Route path='leaderboard' element={<Leaderboard/>} />
              <Route path='invasivedetection' element={<InvasiveDetection/>} />
          </Routes>
          {/* <Outlet /> */} 
      </BrowserRouter>
    );
  }
}

export default App;