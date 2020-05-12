import React from 'react';
import { Props, connector } from './types';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Todos from '../../scenes/Todos';
import TodoDetail from '../../scenes/TodoDetail';
import Header from '../../components/Header';
import MessageBox from '../../components/MessageBox';

function LoggedUser(props: Props) {

  const { msg } = props.auth;
  const { show, text, type } = msg;

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <Todos />
        <Switch>
          <Route
            path="/todos"
            exact
          // component={Todos}
          />
          {/* <Route
            path={`/todos`}
            exact
            component={Todos}
          /> */}
          <Route
            path={`/:id`}
            component={TodoDetail}
          />
          <Redirect to="/" />
        </Switch>

        <div
          className="message-box-wrapper">
          {
            show
            &&
            <MessageBox
              type={type}
              text={text}
            />
          }
        </div>

      </div>
    </div>
  )
}

export default connector(LoggedUser);