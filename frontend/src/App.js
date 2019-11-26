import React from 'react';
import Navbar from './components/Navbar';
import PetsView from './components/PetsView';
import Footer from './components/Footer';

function App() {
  return (
    <div className='h-full flex flex-col bg-gray-300 antialiased text-gray-900'>
      <Navbar />
      <PetsView />
      <Footer />
    </div>
  );
}

export default App;
