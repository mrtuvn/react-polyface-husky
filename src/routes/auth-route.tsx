import React from 'react'
import { Navigate } from 'react-router-dom';
import { PATH } from '../config';

function AuthRoute({ children }: React.PropsWithChildren) {
  const access_token = window.sessionStorage.getItem('access_token');

  if(!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <>{children}</>
  )
}

export default AuthRoute;