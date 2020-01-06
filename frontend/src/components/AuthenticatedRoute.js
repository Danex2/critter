import React from 'react';
import AuthContext from '../context/authContext';
import { navigate } from '@reach/router';

function AuthenticatedRoute({ as: Component, ...rest }) {
  const auth = React.useContext(AuthContext);
  return auth ? <Component {...rest} /> : navigate('/');
}

export default AuthenticatedRoute;
