import React from 'react';
import PetsView from '../components/PetsView';
import checkAuth from '../utils/checkAuth';

function AuthenticatedRoute({ as: Component, ...rest }) {
  return checkAuth() ? <Component {...rest} /> : <PetsView />;
}

export default AuthenticatedRoute;
