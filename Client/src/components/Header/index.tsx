import React from 'react';
import './index.css';
import { Icon } from 'react-icons-kit';
import { arrow_down } from 'react-icons-kit/ikons/arrow_down';

function Header() {
  return (
    <header>
      <span
        className="title">
        Todo List
      </span>
      <span
        className="user dropdown">
        <li>
          <div
            style={{ width: 24, height: 24, display: 'flex' }}>
            <span
              style={{ marginRight: 2 }}>User</span>
            <Icon icon={arrow_down} />
          </div>
          <ul>
            <li>
              <button
                // onClick={() => { deleteTodo && todo && deleteTodo(todo.id) }}
                className="btn">Logout</button>
            </li>
          </ul>
        </li>
      </span>
    </header>
  )
}

export default Header;