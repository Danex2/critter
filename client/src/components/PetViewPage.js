import React from 'react';
import axios from 'axios';
import PetViewItem from './PetViewItem';

const PetsView = () => {
  React.useEffect(() => {
    document.title = 'Find My Pet - Search';
  }, []);
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    axios.get('/pets').then(pets => setPets(pets.data.pets));
  }, []);
  return (
    <div className='flex flex-wrap p-4 flex justify-center'>
      {!pets.length ? (
        <p>No active pet ads.</p>
      ) : (
        pets.map(pet => (
          <PetViewItem
            key={pet._id}
            id={pet._id}
            name={pet.name}
            breed={pet.breed}
            lastSeen={pet.lastSeen}
            updatedAt={pet.updatedAt}
            image={pet.image}
          />
        ))
      )}
    </div>
  );
};

export default PetsView;
