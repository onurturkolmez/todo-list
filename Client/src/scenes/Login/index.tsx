import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory, useLocation, RouteComponentProps, withRouter } from 'react-router-dom';
import './index.css';

type DispatchProps = {
}

type StateProps = {
  auth: any
}

type Props = RouteComponentProps & StateProps & DispatchProps;

function Login(props: Props) {

  const history = useHistory();
  const location = useLocation();
  const [showingField, updateField] = useState('sign-in');
  const getWrapperClass = (field: string) => (`login-wrapper ${showingField === field ? 'active' : ''}`);
  const { authUser } = props.auth;

  let { from }: any = location.state || { from: { pathname: "/" } };

  if (authUser !== null) {
    return (<Redirect to={`/todos`} />);
  }

  let login = () => {
    history.replace(from);
  };

  return (
    <div className="login-container">
      <div className={getWrapperClass('sign-up')}>
        <input className="login-input" type="text" placeholder="Name" />
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Password" />
        <button className="login-button ghost-button">Sign Up</button>
        <a
          onClick={() => { updateField('sign-in') }}
          className="link">Sign In</a>
      </div>
      <div className={getWrapperClass('sign-in')}>
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Password" />
        <button className="login-button ghost-button">Sign In</button>
        <a
          onClick={() => { updateField('sign-up') }}
          className="link">Register</a>
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth }: any) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));