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
import AuthenticatedRoute from '../src/components/AuthenticatedRoute';
import AuthProvider from './context/AuthProvider';
import axios from 'axios';
import NewPost from './components/NewPost';

const token = localStorage.getItem('token');
axios.defaults.headers.common['authorization'] = `Bearer ${token}`;

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router>
        <PetsView path='/' />
        <AuthenticatedRoute as={NewPost} path='/new' />
        <Form path='/form' />
        <About path='/about' />
        <Login path='/login' />
        <Register path='/register' />
        <NotFound default />
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
