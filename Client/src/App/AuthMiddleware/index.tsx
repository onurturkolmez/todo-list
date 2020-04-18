import React from 'react';
import { Props, connector } from './types';
import { Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import Login from '../../scenes/Login';
import LoggedUser from '../LoggedUser';
import Error404 from '../../scenes/Error404';

function RestrictedRoute({ children, authUser, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authUser ?
          (children)
          :
          (<Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />)
      }
    />
  );
}

function AuthMiddleware(props: Props) {

  const { history, location } = props;
  const { initUrl, authUser } = props.auth;

  if (location.pathname === "/") {

    if (authUser === null) {
      return <Redirect to={`/login`} />;
    }

    if (initUrl === "" || initUrl === "/" || initUrl === "/login") {
      history.push({ pathname: '/todos' });
    }

    return <Redirect to={initUrl} />;
  }

  return (
    <Switch>
      <RestrictedRoute
        path={`/todos`}
        authUser={authUser}>
        <LoggedUser />
      </RestrictedRoute>
      <Route
        component={Login}
        path="/login" />
      <Route
        component={Error404} />
    </Switch>
  )
}

export default connector(AuthMiddleware);