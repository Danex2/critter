import React from 'react';
import Navbar from './components/Navbar';
import PetsView from './components/PetsView';
import Footer from './components/Footer';
import Form from './components/Form';
import NotFound from './components/NotFound';
import { Router } from '@reach/router';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <PetsView path='/' />
        <Form path='/form' />
        <NotFound default />
      </Router>
      <Footer />
    </>
  );
}

export default App;
