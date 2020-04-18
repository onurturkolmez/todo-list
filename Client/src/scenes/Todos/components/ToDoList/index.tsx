import React from 'react';
import './index.css';
import { Props } from './types';
import TodoItem from '../TodoItem';
import Icon from '../../../../components/Icon';

const ToDoList = ({
  todo,
  deleteTodo
}: Props) => {

  return (
    <div className="tdl-container">
      <div
        className="tdl-wrapper">

        <div
          className="tdl-header">
          <h1>{todo.name}</h1>
          <span
            className="dropdown">
            <li>
              <div>
                <Icon
                  type={`more_2`}
                />
              </div>
              <span>...</span>
              <ul>
                <li>
                  <button
                    onClick={deleteTodo}
                    className="btn">Delete</button>
                </li>
              </ul>
            </li>
          </span>
        </div>

        {/* {
          todo.items.map((item: any, index: number) => {
            return (
              <TodoItem
                key={index}
                item={JSON.parse(item)}
              />
            );
          })
        } */}

        <footer>
          <h1
            className="open-add">
            {`+ Add${todo && todo.items ? ' Another ' : ' '}Todo Item`}
          </h1>
        </footer>
      </div>
    </div>
  )
}

export default ToDoList;