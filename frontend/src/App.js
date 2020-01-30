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
import axios from 'axios';
import NewPost from './components/NewPost';
import { AuthProvider } from './context/AuthContext';
import { getToken } from './utils/getToken';

const token = getToken();
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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
