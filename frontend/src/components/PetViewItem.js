import React from 'react';

const PetViewItem = () => (
  <div className='rounded-lg overflow-hidden sm:min-w-3/5 md:w-2/5 lg:w-1/4 shadow-lg sm:mr-0 mb-4 md:mr-4'>
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
        <p className='sm:text-xs lg:text-md uppercase text-gray-600 font-semibold'>
          Breed: Terrier
        </p>
        <p className='sm:text-xs lg:text-md uppercase text-gray-600 font-semibold'>
          Last seen: 11/20/19
        </p>
        <div className='flex items-end'>
          <button className='bg-blue-900 w-1/2 p-1 mt-2 rounded hover:bg-blue-700 text-white block focus:text-white focus:outline-none'>
            More Info
          </button>
          <span className='text-xs ml-auto'>Updated: 10/7/2019</span>
        </div>
      </div>
    </div>
  </div>
);

export default PetViewItem;
