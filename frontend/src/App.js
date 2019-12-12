import React from 'react';
import Navbar from './components/Layout/Navbar';
import PetsView from './components/PetsView';
import Footer from './components/Layout/Footer';
import Form from './components/Form';
import NotFound from './components/NotFound';
import About from './components/About';
import Register from './components/Authentication/Register';
import { Router } from '@reach/router';
import Login from './components/Authentication/Login';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <PetsView path='/' />
        <Form path='/form' />
        <About path='/about' />
        <Login path='/login' />
        <Register path='register' />
        <NotFound default />
      </Router>
      <Footer />
    </>
  );
}

export default App;
