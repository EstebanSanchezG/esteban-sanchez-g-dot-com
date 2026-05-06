import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Timeline from './pages/Timeline';
import Demos from './pages/Demos';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='timeline' element={<Timeline/>}/>
          <Route path='demos' element={<Demos/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
