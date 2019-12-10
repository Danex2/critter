import React from 'react';
import { Link } from '@reach/router';

const PetViewItem = ({ image, name, breed, lastSeen, updatedAt, id }) => (
  <div className='rounded-lg overflow-hidden md:w-5/12 lg:w-3/12 shadow-lg sm:ml-0 mb-4 md:ml-4 border-4 border-blue-700'>
    <img className='w-full object-cover ' src={image} alt='Lost pet' />
    <div className='bg-white'>
      <h3 className='font-semibold uppercase text-lg text-center py-1 tracking-widest'>
        {name}
      </h3>
      <hr />
      <div className='px-5 py-4'>
        <p className='uppercase text-gray-800 font-semibold text-sm'>
          Breed: {breed}
        </p>
        <p className='uppercase text-gray-800 font-semibold text-sm'>
          Last seen: {lastSeen}
        </p>
        <div className='flex items-end'>
          <Link
            to={`/pet/${id}`}
            className='bg-blue-900 w-full p-1 mt-2 rounded hover:bg-blue-700 text-white block text-center focus:text-white focus:outline-none'
          >
            More Info
          </Link>
        </div>
      </div>
      <hr />
      <span className='text-xs ml-auto py-3 inline-block font-bold text-gray-600 text-center w-full'>
        Updated: {updatedAt}
      </span>
    </div>
  </div>
);

export default PetViewItem;
