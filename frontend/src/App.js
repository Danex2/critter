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
import AuthContext from '../src/context/authContext';
import jwt from 'jwt-decode';
import AuthenticatedRoute from '../src/components/AuthenticatedRoute';

let decoded_token;
if (localStorage.token) {
  decoded_token = jwt(localStorage.token);
}

function App() {
  return (
    <AuthContext.Provider value={decoded_token}>
      <Navbar />
      <Router>
        <PetsView path='/' />
        <Form path='/form' />
        <AuthenticatedRoute as={About} path='/about' />
        <Login path='/login' />
        <Register path='register' />
        <NotFound default />
      </Router>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
