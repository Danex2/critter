import React from "react";
import axios from "axios";
import PetViewItem from "./PetViewItem";

const PetsView = () => {
  React.useEffect(() => {
    document.title = "Find My Pet - Search";
  }, []);
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/pets")
      .then(pets => setPets(pets.data.pets));
  }, []);
  return (
    <div className='flex flex-wrap p-4 flex justify-center'>
      {pets ? (
        pets.map(pet => {
          return (
            <PetViewItem
              key={pet._id}
              name={pet.name}
              breed={pet.breed}
              lastSeen={pet.lastSeen}
              updatedAt={pet.updatedAt}
              image={pet.image}
            />
          );
        })
      ) : (
        <h1>No active ads.</h1>
      )}
    </div>
  );
};

export default PetsView;
