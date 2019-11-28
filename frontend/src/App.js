import React from 'react';
import Navbar from './components/Navbar';
import PetsView from './components/PetsView';
import Footer from './components/Footer';
import Form from './components/Form';
import { Router } from '@reach/router';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <PetsView path='/pets' />
        <Form path='/form' />
      </Router>
      <Footer />
    </>
  );
}

export default App;
