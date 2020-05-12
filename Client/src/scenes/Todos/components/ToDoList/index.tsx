import React, { useState } from 'react';
import './index.css';
import { Props, connector } from './types';
import TodoItem from '../TodoItem';
import { TrashIcon, PenIcon, CancelIcon, OkIcon } from '../../../../components/Icons';

function ToDoList(props: Props) {

  const [isEdit, toggleEdit] = useState(false);
  const [updatedName, onNameUpdate] = useState(props.todo.name);

  const { todo, deleteTodo } = props;

  const updateTodo = () => {
    props.updateTodo(updatedName, todo.id);
  }

  return (
    <div className="tdl-container">
      <div
        className="tdl-wrapper">

        <div
          className="tdl-header">

          {
            isEdit
              ?
              <input
                className="editable-input focusable"
                autoFocus
                value={updatedName}
                onChange={(e: any) => { onNameUpdate(e.target.value) }}
                onKeyPress={e => {
                  if (e.key == 'Enter') updateTodo();
                }}
              />
              :
              <h1>{todo.name}</h1>
          }

          {
            !isEdit
            &&
            <span
              className="centered-flex">
              <a href="#" onClick={() => toggleEdit(!isEdit)}>
                <PenIcon />
              </a>
              <a href="#" onClick={deleteTodo}>
                <TrashIcon />
              </a>
            </span>
          }

          {
            isEdit
            &&
            <span
              className="centered-flex">
              <a href="#" onClick={() => toggleEdit(!isEdit)}>
                <CancelIcon />
              </a>
              <a href="#" onClick={() => { updateTodo() }}>
                <OkIcon />
              </a>
            </span>
          }

          {/* <span
            className="dropdown">
            <li>
              <div>
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
          </span> */}
        </div>

        <TodoItem
          todoId={todo.id} />
      </div>
    </div>
  )
}

export default connector(ToDoList);