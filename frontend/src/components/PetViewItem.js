import React from 'react';

const PetViewItem = () => (
  <div className='rounded-lg overflow-hidden md:w-5/12 lg:w-3/12 shadow-lg sm:ml-0 mb-4 md:ml-4'>
    <img
      className='w-full object-cover '
      src='https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'
      alt='Lost pet'
    />
    <div className='bg-white'>
      <h3 class='font-semibold uppercase text-lg text-center py-1 tracking-widest'>
        Rex
      </h3>
      <hr />
      <div className='px-5 py-4'>
        <p className='uppercase text-gray-800 font-semibold text-sm'>
          Breed: Terrier
        </p>
        <p className='uppercase text-gray-800 font-semibold text-sm'>
          Last seen: 11/20/19
        </p>
        <div className='flex items-end'>
          <button className='bg-blue-900 w-full p-1 mt-2 rounded hover:bg-blue-700 text-white block focus:text-white focus:outline-none'>
            More Info
          </button>
        </div>
      </div>
      <hr />
      <span className='text-xs ml-auto py-3 inline-block font-bold text-gray-600 text-center w-full'>
        Updated: 10/7/2019
      </span>
    </div>
  </div>
);

export default PetViewItem;
