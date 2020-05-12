import React from 'react';
import { Props } from './types';
import './index.css';
import { PlusIcon } from '../../../../components/Icons';

const AddTodo = ({
  name,
  addClick,
  onChangeName
}: Props) => {
  return (
    <div className="tdl-container add-todo-container">
      <div
        className="tdl-wrapper">
        <div
          className="add-wrapper mod-add is-idle">
          <span
            className="open-add">
            <PlusIcon />
            <span>Add Todo List</span>

          </span>
          <div
            className="add-controls flex-wrap">
            <input
              className="controls textBox"
              type="text"
              value={name}
              onChange={(e: any) => { onChangeName(e) }}
              placeholder="Type Your List Name"
              onKeyPress={e => {
                if (e.key == 'Enter') addClick();
              }}
            />
            <div className="d-flex w-100 justify-space-between">
              <button
                onClick={addClick}
                className="btn bg-green">
                Add List
              </button>
              {/* <Icon icon={close} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;