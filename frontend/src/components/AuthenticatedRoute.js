import React from 'react';
import PetView from './PetViewPage';
import checkAuth from '../utils/checkAuth';

function AuthenticatedRoute({ as: Component, ...rest }) {
  return checkAuth() ? <Component {...rest} /> : <PetView />;
}

export default AuthenticatedRoute;
