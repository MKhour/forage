import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ElementOne from './components/ElementOne';
import PlantForm from './components/PlantForm';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='element' element={<ElementOne/>} />
              <Route path='form' element={<PlantForm/>} />
          </Routes>
          {/* <Outlet /> */} 
      </BrowserRouter>
    );
  }
}

export default App;