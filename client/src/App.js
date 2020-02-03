import React from 'react';
import Navbar from './components/Layout/Navbar';
import PetView from './components/PetViewPage';
import Footer from './components/Layout/Footer';
import Form from './components/Form';
import NotFound from './components/NotFound';
import About from './components/About';
import Register from './components/Authentication/Register';
import { Router } from '@reach/router';
import Login from './components/Authentication/Login';
import Pet from './components/Pet';
import MyAccount from './components/MyAccount';
import AuthenticatedRoute from '../src/components/AuthenticatedRoute';
import NewPost from './components/NewPost';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router>
        <PetView path='/' />
        <AuthenticatedRoute as={NewPost} path='/new' />
        <Form path='/form' />
        <About path='/about' />
        <Pet path='/pet/:id' />
        <Login path='/login' />
        <Register path='/register' />
        <AuthenticatedRoute as={MyAccount} path='/account' />
        <NotFound default />
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
