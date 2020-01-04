import React from 'react';
import { Link } from '@reach/router';

function About() {
  React.useEffect(() => {
    document.title = 'Find My Pet - About';
  }, []);
  return (
    <div className='h-full flex justify-center items-center flex-col'>
      <div className='w-2/3 lg:w-1/2 text-sm md:text-lg'>
        <h2 className='text-3xl font-semibold text-blue-900 tracking-wide'>
          Find My Pet
        </h2>
        <p className='text-gray-600 text-justify leading-relaxed mb-3'>
          The main idea for this application is to help people find their lost
          pets faster. With the way information travels so fast in this day and
          age I figured making a web application where people could post ads
          looking for help to find their pets was a good idea. I hope to add
          more features in the future to make it easier and faster for people to
          share information on lost pets but for now I hope this is enough.
        </p>
        <hr />
        <p className='text-gray-600 mt-3'>
          To get started please make an account{' '}
          <Link className='text-blue-400 hover:text-blue-600' to='/register'>
            here.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
