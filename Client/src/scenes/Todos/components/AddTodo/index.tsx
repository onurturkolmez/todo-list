import React from 'react';
import { Props } from './types';
const AddTodo = ({
  name,
  addClick,
  onChangeName
}: Props) => {
  return (
    <div className="tdl-container">
      <div
        className="tdl-wrapper">
        <div
          className="add-wrapper mod-add is-idle">

          <span
            className="open-add">
            + Add Todo List
            </span>
          <div
            className="add-controls flex-wrap">
            <input
              className="controls textBox"
              type="text"
              value={name}
              onChange={(e: any) => { onChangeName(e) }}
              placeholder="Type Your List Name"
            />
            <button
              onClick={addClick}
              className="btn bg-green">
              Add List
              </button>
            <span
              className="controls open-add ml-2">
              x
        </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;