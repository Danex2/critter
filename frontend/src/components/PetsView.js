import React from 'react';
import MainAreaView from './MainAreaView';
import PetViewItem from './PetViewItem';

const PetsView = () => (
  <MainAreaView>
    <div className='flex flex-wrap justify-center'>
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
      <PetViewItem />
    </div>
  </MainAreaView>
);

export default PetsView;
